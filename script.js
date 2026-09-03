function tampilkanNama() {
    document.getElementById("namaanggota").innerHTML =
    `
    <ol style="list-style-type: decimal; padding-left: 5%;">
        <li>ale(ale@gmail.com)</li>
        <li>haykal(haykal@gmail.com)</li>
        <li>tyo(tyo@gmail.com)</li>
    </ol>

    <a href="kontak_anggota.html">
        <button onclick="location.reload()">
            tutup kembali
        </button>
    `;
}
