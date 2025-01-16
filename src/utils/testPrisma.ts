import prisma from './db'; // Pastikan path-nya benar

async function testConnection() {
  try {
    const users = await prisma.user.findMany(); // Sesuaikan model ini dengan model yang Anda buat di Prisma schema
    console.log("Koneksi berhasil! Data user:", users);
  } catch (error) {
    console.error("Gagal menghubungkan ke database:", error);
  } finally {
    await prisma.$disconnect(); // Pastikan selalu menutup koneksi database setelah selesai
  }
}

testConnection();
