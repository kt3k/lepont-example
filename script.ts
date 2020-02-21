import { sendMessage, on } from 'lepont/browser'

async function main() {
  try {
    const res = await sendMessage({
      type: 'foo',
      payload: {abc: 123}
    })
    alert(`res=${res}`)
  } catch (e) {
    alert(e)
  }

}

on('bar', (p) => {
  const div = document.createElement('div')
  div.textContent = JSON.stringify(p)
  document.body.appendChild(div)
})

setTimeout(main, 500)
