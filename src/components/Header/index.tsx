import Logo from '/assets/Logo.png';

export default function Header() {
  return (
    <div className="w-full h-52 bg-[#0D0D0D] flex justify-items-center	 items-center	justify-center	">
      <img src={Logo} />
    </div>
  );
}
