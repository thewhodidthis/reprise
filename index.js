((d) => {
  const body = d.body
  const mark = d.createElement('pre')
  const jack = console.log
  const pimp = JSON.stringify

  console.log = (...args) => {
    const text = args.map((z = '') => (typeof z === 'object' ? pimp(z, null, '\t') : z.toString()))

    if (text.length) {
      const main = text.shift().replace(/%[soOfid]/g, () => text.shift())
      const rest = text.reduce((p, n) => `${p} ${n}`, '')

      mark.innerHTML += mark.innerHTML !== '' ? '\n' : ''
      mark.innerHTML += main + rest
    }

    jack(...args)
  }

  body.insertBefore(mark, body.firstChild)
})(document)
