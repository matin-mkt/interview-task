"use client"

const Navbar = () => {
    // const pathName = usePathname()
    console.warn(window.location.href);
  return (
    <div>Navbar: {window.location.href} </div>
  )
}

export default Navbar