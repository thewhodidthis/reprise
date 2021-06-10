;((d) => {
  const log = console.log
  const stringify = JSON.stringify
  const body = d.body
  const textHost = d.createElement("pre")

  // Overtake existing `console.log` to insert mirroring
  // https://stackoverflow.com/questions/1215392
  console.log = (...args) => {
    // Stringify parameters like `console.log` does internally more or less. Note
    // `typeof null` is 'object' too. Also, calling `<Number>.toString()` directly
    // may be a syntax error, but having `<Number>` assigned to `z` is no problem
    const input = args.map((z = "undefined") => (typeof z === "object" ? stringify(z, null, "\t") : z.toString()))

    if (input.length) {
      // Extract out and fill in substitution strings if any
      const main = input.shift().replace(/%[soOfid]/g, () => input.shift())

      // Collate what's left
      const rest = input.reduce((p, n) => `${p} ${n}`, "")

      // Observe line breaks past first call
      textHost.innerHTML += textHost.innerHTML === "" ? "" : "\n"
      textHost.innerHTML += main + rest
    }

    // Do as originally intended
    log(...args)
  }

  body.insertBefore(textHost, body.firstChild)
})(document)
