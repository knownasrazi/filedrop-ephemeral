import { useState } from "react";
export default function App(){
  const [file,setFile]=useState<File|null>(null);
  const [link,setLink]=useState("");
  function share(){
    if(!file) return;
    const url = URL.createObjectURL(file);
    setLink(url);
  }
  return (
    <main className="bg-[#fdfcfa] min-h-screen text-[#1a1a1a]">
      <div className="mx-auto max-w-md px-6 py-16 text-center">
        <h1 className="text-2xl font-light">filedrop-ephemeral</h1>
        <p className="text-sm text-[#9a9590]">Files that vanish — link expires in 24h.</p>
        <div className="mt-6 rounded-2xl border-2 border-dashed border-[#ebe7e0] bg-white p-8">
          <input type="file" onChange={e=>setFile(e.target.files?.[0]||null)} />
          <button onClick={share} className="mt-4 rounded-full bg-[#1a1a1a] px-6 py-2 text-sm text-white">Create link</button>
          {link && <a href={link} className="mt-4 block text-sm text-[#5a5754] break-all">{link}</a>}
        </div>
      </div>
    </main>
  );
}
