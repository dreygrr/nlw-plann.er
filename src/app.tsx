export function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
      
        <div className="h-16 px-4 rounded-xl bg-zinc-900 flex items-center">
          <input type="text" name="" id="" placeholder="Para onde você vai?" />
          
          <input type="text" name="" id="" placeholder="Quando?" />

          <button type="submit">Vamos!</button>
        </div>
      
        <p className="text-sm text-zinc-500">Ao planejar sua  viagem pela plann.er, você automaticamente concorda<br /> com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.</p>
      </div>
    </div>
  )
}
