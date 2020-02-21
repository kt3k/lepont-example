import { sendMessage } from 'lepont/browser'

async function main() {
  try {
    const res = await sendMessage({
      type: '',
    })
    alert(`res=${res}`)
  } catch (e) {
    alert(e)
  }

}

setTimeout(main, 500)
