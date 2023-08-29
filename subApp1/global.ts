var globalVar = 'global'




window['loadFileFromImport'] = async () => {
  const a = await import('@/assets/js/a.js')
}
window['loadFileFromWorker'] = async () => {
  const worker = new Worker('/js/a.js')
}