import algosdk from 'algosdk'

export module Utils {
    interface GlobalStateValue {
        action: number,
        bytes?: string
        uint?: number
    }

    interface GlobalState {
        key: string
        value: GlobalStateValue
    }

    interface ReadableGlobalState {
        [key: string]: string | number | bigint | undefined
    }

    export function getReadableGlobalState (delta: Array<GlobalState>) {
      const r = {} as ReadableGlobalState

      delta.forEach(d => {
        const key = Buffer.from(d.key, 'base64').toString('utf8')
        let value: string | number | bigint | undefined

        if (d.value.bytes) {
          // first see if it's a valid address
          const b = new Uint8Array(Buffer.from(d.value.bytes as string, 'base64'))
          value = algosdk.encodeAddress(b)

          // then decode as string
          if (!algosdk.isValidAddress(value)) {
            value = Buffer.from(d.value.bytes as string, 'base64').toString()
          }
        } else {
          value = d.value.uint
        }

        r[key] = value
      })

      return r
    }
}

export default Utils
