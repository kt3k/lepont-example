import { sendMessage, on } from 'lepont/browser'

async function sendFoo() {
  addMessage('Hello!')
  try {
    const res = await sendMessage({
      type: 'foo',
      payload: { "Hello, world!": "through LePont bridge" }
    })
  } catch (e) {
    alert(e)
  }
}

function addMessage(msg) {
  const div = document.createElement('div')
  div.textContent = msg
  document.body.appendChild(div)
}

on('bar', (p) => {
  addMessage(JSON.stringify(p))
})

const qs = (q) => document.querySelector(q)

async function initEvents() {
  qs('.inf-btn').addEventListener('click', sendFoo)
}

async function main() {
  initEvents()
}

setTimeout(main, 500)
