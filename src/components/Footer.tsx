export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-[#050505] border-t border-white/5 text-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-purple-500 p-[1px]">
              <div className="w-full h-full bg-[#050505] rounded-[7px] flex items-center justify-center font-playfair font-bold text-white text-sm">
                Y
              </div>
            </div>
            <span className="font-playfair text-xl font-bold text-white tracking-tight">
              Yash Chavan
            </span>
          </div>
          <p className="font-inter text-white/30 text-center max-w-md leading-relaxed">
            Building digital horizons with precision and purpose. <br />
            © {currentYear} Yash Kiran Chavan. All rights reserved.
          </p>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
      </div>
    </footer>
  )
}