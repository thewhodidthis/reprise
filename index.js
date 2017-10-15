((d) => {
  const body = d.body
  const mark = d.createElement('pre')
  const jack = console.log

  console.log = (...args) => {
    const text = args.map(m => (typeof m === 'object' ? JSON.stringify(m, null, '\t') : m.toString()))

    if (text.length) {
      const main = text.shift().replace(/%[soOfid]/g, m => text.shift() || m)
      const rest = text.reduce((p, n) => `${p} ${n}`, '')

      mark.innerHTML += mark.innerHTML !== '' ? '\n' : ''
      mark.innerHTML += main + rest
    }

    jack(...args)
  }

  body.insertBefore(mark, body.firstChild)
})(document)
