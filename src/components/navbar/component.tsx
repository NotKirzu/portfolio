import NavbarMenu from './menu'
import NavbarSettings from './settings'

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="mx-auto px-4">
        <div className="relative flex items-center justify-between h-16">
          <div className="z-20">
            <NavbarMenu />
          </div>

          <div className="z-20">
            <NavbarSettings />
          </div>
        </div>
      </div>
    </div>
  )
}
