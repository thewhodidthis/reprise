import './index.js'

const { log } = console

log('%s: %o', '%o', { foo: 'bar' })
log('%s: %o', '%o', { foo: 'bar', bar: { foo: 'bar' } })
log('%s: %s %s', '%s', 'Hello', 'world')
log('%d: %d', '%i', 1001)
log('%f: %f', '%f', 10.0)
