((d) => {
  const log = console.log
  const stringify = JSON.stringify
  const body = d.body
  const textHost = d.createElement('pre')

  console.log = (...args) => {
    const text = args.map((z = '') => (typeof z === 'object' ? stringify(z, null, '\t') : z.toString()))

    if (text.length) {
      const main = text.shift().replace(/%[soOfid]/g, () => text.shift())
      const rest = text.reduce((p, n) => `${p} ${n}`, '')

      textHost.innerHTML += textHost.innerHTML !== '' ? '\n' : ''
      textHost.innerHTML += main + rest
    }

    log(...args)
  }

  body.insertBefore(textHost, body.firstChild)
})(document)
