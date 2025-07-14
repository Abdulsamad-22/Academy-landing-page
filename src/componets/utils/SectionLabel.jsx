export default function SectionLabel({ label }) {
  return (
    <div className="relative bg-[rgba(199,32,32,0.2)] text-[#c72020] text-[1.125rem] font-semibold py-2 px-3">
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0.2)] pointer-events-none"></div>
      {label}
    </div>
  );
}
