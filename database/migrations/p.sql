-- MySQL Script
-- Generated: 2025-07-19 02:05 WIB
-- Database: sekolahku_ppdb

-- -----------------------------------------------------
-- Schema sekolahku_ppdb
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS `sekolahku_ppdb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `sekolahku_ppdb`;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`users`
-- Deskripsi: Tabel utama untuk semua jenis pengguna dalam sistem (Admin, PPDB, Bendahara).
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`users` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `role` ENUM('Admin', 'PPDB', 'Bendahara') NULL DEFAULT NULL,
  `status` ENUM('Aktif', 'Tidak Aktif') NOT NULL,
  `foto_profile` VARCHAR(255) NULL DEFAULT NULL,
  `email_verified_at` TIMESTAMP NULL DEFAULT NULL,
  `password` VARCHAR(255) NOT NULL,
  `remember_token` VARCHAR(100) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `users_username_unique` (`username` ASC),
  UNIQUE INDEX `users_email_unique` (`email` ASC)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`password_resets`
-- Deskripsi: Digunakan untuk fitur reset password pengguna.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`password_resets` (
  `email` VARCHAR(255) NOT NULL,
  `token` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  INDEX `password_resets_email_index` (`email` ASC)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`failed_jobs`
-- Deskripsi: Mencatat pekerjaan latar belakang yang gagal untuk debugging.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`failed_jobs` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` VARCHAR(255) NOT NULL,
  `connection` TEXT NOT NULL,
  `queue` TEXT NOT NULL,
  `payload` LONGTEXT NOT NULL,
  `exception` LONGTEXT NOT NULL,
  `failed_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `failed_jobs_uuid_unique` (`uuid` ASC)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`personal_access_tokens`
-- Deskripsi: Digunakan untuk API token atau sesi pengguna yang lebih canggih (misalnya untuk aplikasi SPA).
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`personal_access_tokens` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` VARCHAR(255) NOT NULL,
  `tokenable_id` BIGINT UNSIGNED NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `token` VARCHAR(64) NOT NULL,
  `abilities` TEXT NULL DEFAULT NULL,
  `last_used_at` TIMESTAMP NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `personal_access_tokens_token_unique` (`token` ASC),
  INDEX `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type` ASC, `tokenable_id` ASC)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`abouts`
-- Deskripsi: Menyimpan informasi 'tentang kami' di landing page.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`abouts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `desc` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `is_active` ENUM('0', '1') NOT NULL DEFAULT '0',
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`kategori_beritas`
-- Deskripsi: Kategori untuk posting berita.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`kategori_beritas` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nama` VARCHAR(255) NOT NULL,
  `is_active` ENUM('0', '1') NOT NULL DEFAULT '0',
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `kategori_beritas_nama_unique` (`nama` ASC)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`beritas`
-- Deskripsi: Untuk posting berita dan pengumuman sekolah di landing page.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`beritas` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `content` TEXT NOT NULL,
  `kategori_id` INT NOT NULL, -- Perhatikan, ini INT bukan BIGINT, sesuaikan jika kategori_beritas.id BIGINT
  `thumbnail` VARCHAR(255) NOT NULL,
  `is_active` ENUM('0', '1') NOT NULL DEFAULT '0',
  `created_by` INT NOT NULL, -- ID pengguna yang membuat berita (bisa FK ke users.id jika role admin)
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `beritas_title_unique` (`title` ASC)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Tambahkan Foreign Key untuk `beritas.kategori_id` dan `beritas.created_by` (jika diinginkan)
-- ALTER TABLE `sekolahku_ppdb`.`beritas`
-- ADD CONSTRAINT `fk_beritas_kategori_id`
--   FOREIGN KEY (`kategori_id`)
--   REFERENCES `sekolahku_ppdb`.`kategori_beritas` (`id`)
--   ON DELETE RESTRICT ON UPDATE CASCADE;

-- ALTER TABLE `sekolahku_ppdb`.`beritas`
-- ADD CONSTRAINT `fk_beritas_created_by`
--   FOREIGN KEY (`created_by`)
--   REFERENCES `sekolahku_ppdb`.`users` (`id`)
--   ON DELETE RESTRICT ON UPDATE CASCADE;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`events`
-- Deskripsi: Untuk acara atau jadwal penting sekolah/PPDB.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`events` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `desc` TEXT NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `content` TEXT NOT NULL, -- Ubah dari VARCHAR(255) ke TEXT jika kontennya bisa panjang
  `thumbnail` VARCHAR(255) NOT NULL,
  `acara` DATETIME NOT NULL,
  `lokasi` VARCHAR(255) NOT NULL,
  `is_active` ENUM('0', '1') NOT NULL DEFAULT '0',
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `events_title_unique` (`title` ASC)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`footers`
-- Deskripsi: Informasi kontak dan tautan media sosial di bagian bawah halaman (footer).
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`footers` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `facebook` VARCHAR(255) NOT NULL,
  `instagram` VARCHAR(255) NOT NULL,
  `twitter` VARCHAR(255) NOT NULL,
  `youtube` VARCHAR(255) NOT NULL,
  `logo` VARCHAR(255) NOT NULL,
  `telp` VARCHAR(255) NOT NULL,
  `whatsapp` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `desc` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`image_sliders`
-- Deskripsi: Untuk banner atau poster promosi di landing page (termasuk poster PPDB).
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`image_sliders` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(255) NOT NULL,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  `desc` VARCHAR(255) NULL DEFAULT NULL,
  `urutan` INT NOT NULL,
  `is_active` ENUM('0', '1') NOT NULL DEFAULT '0',
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`profile_sekolahs`
-- Deskripsi: Detail profil sekolah untuk landing page.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`profile_sekolahs` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `content` TEXT NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`visimisis`
-- Deskripsi: Visi dan misi sekolah untuk landing page.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`visimisis` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `visi` TEXT NOT NULL,
  `misi` TEXT NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`data_murids`
-- Deskripsi: Data pribadi calon murid yang mendaftar PPDB.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`data_murids` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` BIGINT NOT NULL, -- Foreign Key ke users.id
  `nis` BIGINT NULL DEFAULT NULL,
  `nisn` BIGINT NULL DEFAULT NULL,
  `tempat_lahir` VARCHAR(255) NULL DEFAULT NULL,
  `tgl_lahir` DATE NULL DEFAULT NULL,
  `agama` ENUM('Islam','Kristen Katolik','Kristen Protestan','Hindu','Budha','Konghucu') NULL DEFAULT NULL,
  `telp` VARCHAR(255) NULL DEFAULT NULL,
  `whatsapp` VARCHAR(255) NULL DEFAULT NULL,
  `alamat` TEXT NULL DEFAULT NULL,
  `asal_sekolah` VARCHAR(255) NULL DEFAULT NULL,
  `proses` ENUM('Pendaftaran','Berkas','Diterima','Ditolak') NOT NULL DEFAULT 'Pendaftaran',
  -- Status PPDB yang lebih spesifik
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Tambahkan Foreign Key setelah tabel `users` dibuat
ALTER TABLE `sekolahku_ppdb`.`data_murids`
ADD CONSTRAINT `fk_data_murids_user_id`
  FOREIGN KEY (`user_id`)
  REFERENCES `sekolahku_ppdb`.`users` (`id`)
  ON DELETE CASCADE ON UPDATE CASCADE;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`data_orang_tuas`
-- Deskripsi: Data orang tua/wali dari calon murid.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`data_orang_tuas` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` BIGINT NOT NULL, -- Foreign Key ke users.id
  `nama_ayah` VARCHAR(255) NULL DEFAULT NULL,
  `pendidikan_ayah` ENUM('SD','SMP','SMA/SMK','S1','S2','S3') NULL DEFAULT NULL,
  `telp_ayah` VARCHAR(255) NULL DEFAULT NULL,
  `pekerjaan_ayah` ENUM('Wiraswasta','Wirausaha','ASN','Buruh') NULL DEFAULT NULL,
  `alamat_ayah` VARCHAR(255) NULL DEFAULT NULL,
  `nama_ibu` VARCHAR(255) NULL DEFAULT NULL,
  `pendidikan_ibu` ENUM('SD','SMP','SMA/SMK','S1','S2','S3') NULL DEFAULT NULL,
  `telp_ibu` VARCHAR(255) NULL DEFAULT NULL,
  `pekerjaan_ibu` ENUM('Ibu Rumah Tangga','Wiraswasta','Wirausaha','ASN','Buruh') NULL DEFAULT NULL,
  `alamat_ibu` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Tambahkan Foreign Key setelah tabel `users` dibuat
ALTER TABLE `sekolahku_ppdb`.`data_orang_tuas`
ADD CONSTRAINT `fk_data_orang_tuas_user_id`
  FOREIGN KEY (`user_id`)
  REFERENCES `sekolahku_ppdb`.`users` (`id`)
  ON DELETE CASCADE ON UPDATE CASCADE;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`berkas_murids`
-- Deskripsi: Menyimpan nama file berkas yang diunggah oleh pendaftar.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`berkas_murids` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` BIGINT NOT NULL, -- Foreign Key ke users.id
  `kartu_keluarga` VARCHAR(255) NULL DEFAULT NULL,
  `akte_kelahiran` VARCHAR(255) NULL DEFAULT NULL,
  `surat_kelakuan_baik` VARCHAR(255) NULL DEFAULT NULL,
  `surat_sehat` VARCHAR(255) NULL DEFAULT NULL,
  `surat_tidak_buta_warna` VARCHAR(255) NULL DEFAULT NULL,
  `rapor` VARCHAR(255) NULL DEFAULT NULL,
  `foto` VARCHAR(255) NULL DEFAULT NULL,
  `ijazah` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Tambahkan Foreign Key setelah tabel `users` dibuat
ALTER TABLE `sekolahku_ppdb`.`berkas_murids`
ADD CONSTRAINT `fk_berkas_murids_user_id`
  FOREIGN KEY (`user_id`)
  REFERENCES `sekolahku_ppdb`.`users` (`id`)
  ON DELETE CASCADE ON UPDATE CASCADE;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`banks`
-- Deskripsi: Daftar kode dan nama bank yang tersedia.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`banks` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sandi_bank` VARCHAR(20) NOT NULL,
  `nama_bank` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`bank_accounts`
-- Deskripsi: Rekening bank sekolah yang menjadi tujuan pembayaran.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`bank_accounts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` BIGINT UNSIGNED NOT NULL, -- ID pengguna (bendahara/admin) yang mengelola rekening ini
  `account_number` BIGINT UNSIGNED NOT NULL,
  `account_name` VARCHAR(255) NOT NULL,
  `bank_name` VARCHAR(255) NOT NULL, -- Nama bank secara tekstual
  `is_primary` TINYINT(1) NOT NULL, -- Apakah ini rekening utama?
  `is_active` TINYINT(1) NOT NULL, -- Apakah rekening ini aktif?
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Tambahkan Foreign Key setelah tabel `users` dibuat
ALTER TABLE `sekolahku_ppdb`.`bank_accounts`
ADD CONSTRAINT `fk_bank_accounts_user_id`
  FOREIGN KEY (`user_id`)
  REFERENCES `sekolahku_ppdb`.`users` (`id`)
  ON DELETE CASCADE ON UPDATE CASCADE;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`payment_spps`
-- Deskripsi: Mencatat status pembayaran (bisa diadaptasi untuk pembayaran pendaftaran).
--             Jika hanya untuk pendaftaran satu kali, pertimbangkan nama tabel `payments_pendaftaran`
--             dan struktur kolom yang lebih sederhana. Untuk saat ini, kita gunakan yang ada.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`payment_spps` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` BIGINT UNSIGNED NOT NULL, -- ID pendaftar
  `year` BIGINT NOT NULL, -- Tahun pendaftaran/pembayaran
  `is_active` TINYINT(1) NOT NULL,
  `status_pendaftaran` ENUM('paid','unpaid','free') NOT NULL DEFAULT 'unpaid', -- Kolom baru untuk status pembayaran pendaftaran
  -- Kolom bulanan (`January` s/d `December`) dihapus untuk efisiensi jika hanya untuk pendaftaran
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Tambahkan Foreign Key setelah tabel `users` dibuat
ALTER TABLE `sekolahku_ppdb`.`payment_spps`
ADD CONSTRAINT `fk_payment_spps_user_id`
  FOREIGN KEY (`user_id`)
  REFERENCES `sekolahku_ppdb`.`users` (`id`)
  ON DELETE CASCADE ON UPDATE CASCADE;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`detail_payment_spps`
-- Deskripsi: Detail bukti pembayaran yang diunggah pendaftar (termasuk bukti transfer pendaftaran).
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`detail_payment_spps` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `payment_id` BIGINT UNSIGNED NOT NULL, -- Foreign Key ke payment_spps (atau tabel pembayaran pendaftaran khusus)
  `user_id` BIGINT UNSIGNED NOT NULL, -- ID pendaftar yang melakukan pembayaran
  `sender` VARCHAR(255) NULL DEFAULT NULL, -- Nama pengirim dari bank
  `bank_sender` VARCHAR(255) NULL DEFAULT NULL, -- Nama bank pengirim
  `destination_bank` VARCHAR(255) NULL DEFAULT NULL, -- Nama bank tujuan pembayaran (bisa dari bank_accounts.bank_name)
  `description` VARCHAR(255) NULL DEFAULT NULL, -- Deskripsi pembayaran (misal: "Biaya Pendaftaran PPDB 2025")
  -- `month` VARCHAR(255) NOT NULL, -- Dihapus jika bukan pembayaran bulanan
  `amount` BIGINT NOT NULL,
  `status` ENUM('paid','unpaid','pending_verification','rejected') NOT NULL DEFAULT 'unpaid',
  -- Tambah status `pending_verification` dan `rejected`
  `file` VARCHAR(255) NULL DEFAULT NULL, -- Lokasi file bukti transfer
  `date_file` DATE NULL DEFAULT NULL, -- Tanggal upload bukti
  `approve_by` BIGINT UNSIGNED NULL DEFAULT NULL, -- ID pengguna (admin/bendahara) yang menyetujui
  `approve_date` DATE NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Tambahkan Foreign Key setelah tabel `users` dan `payment_spps` dibuat
ALTER TABLE `sekolahku_ppdb`.`detail_payment_spps`
ADD CONSTRAINT `fk_detail_payment_spps_payment_id`
  FOREIGN KEY (`payment_id`)
  REFERENCES `sekolahku_ppdb`.`payment_spps` (`id`)
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `sekolahku_ppdb`.`detail_payment_spps`
ADD CONSTRAINT `fk_detail_payment_spps_user_id`
  FOREIGN KEY (`user_id`)
  REFERENCES `sekolahku_ppdb`.`users` (`id`)
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `sekolahku_ppdb`.`detail_payment_spps`
ADD CONSTRAINT `fk_detail_payment_spps_approve_by`
  FOREIGN KEY (`approve_by`)
  REFERENCES `sekolahku_ppdb`.`users` (`id`)
  ON DELETE SET NULL ON UPDATE CASCADE;


-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`settings`
-- Deskripsi: Pengaturan umum aplikasi, bisa untuk notifikasi email atau pengaturan PPDB.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`settings` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `key` VARCHAR(255) NOT NULL UNIQUE, -- Misalnya 'ppdb_open_date', 'ppdb_fee_amount'
  `value` TEXT NULL,
  `description` VARCHAR(255) NULL,
  `update_by` BIGINT UNSIGNED NULL DEFAULT NULL, -- ID pengguna yang terakhir memperbarui setting
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Tambahkan Foreign Key setelah tabel `users` dibuat
ALTER TABLE `sekolahku_ppdb`.`settings`
ADD CONSTRAINT `fk_settings_update_by`
  FOREIGN KEY (`update_by`)
  REFERENCES `sekolahku_ppdb`.`users` (`id`)
  ON DELETE SET NULL ON UPDATE CASCADE;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`spp_setting`
-- Deskripsi: Pengaturan biaya SPP atau biaya pendaftaran standar.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`spp_setting` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `amount` INT NOT NULL DEFAULT 0, -- Jumlah biaya (bisa biaya pendaftaran atau SPP bulanan)
  `description` VARCHAR(255) NULL, -- Misal: "Biaya Pendaftaran PPDB", "Biaya SPP Bulanan"
  `update_by` BIGINT UNSIGNED NOT NULL, -- ID pengguna yang memperbarui setting ini
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Tambahkan Foreign Key setelah tabel `users` dibuat
ALTER TABLE `sekolahku_ppdb`.`spp_setting`
ADD CONSTRAINT `fk_spp_setting_update_by`
  FOREIGN KEY (`update_by`)
  REFERENCES `sekolahku_ppdb`.`users` (`id`)
  ON DELETE CASCADE ON UPDATE CASCADE;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`prestasi`
-- Deskripsi: Tabel baru untuk mengelola prestasi sekolah/siswa di landing page.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`prestasi` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`struktur_organisasi`
-- Deskripsi: Tabel baru untuk mengelola struktur organisasi sekolah secara hierarkis.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`struktur_organisasi` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `position` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `parent_id` BIGINT UNSIGNED NULL DEFAULT NULL, -- Untuk hierarki (nullable jika root)
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Tambahkan Foreign Key setelah tabel itu sendiri dibuat (self-referencing)
ALTER TABLE `sekolahku_ppdb`.`struktur_organisasi`
ADD CONSTRAINT `fk_struktur_organisasi_parent_id`
  FOREIGN KEY (`parent_id`)
  REFERENCES `sekolahku_ppdb`.`struktur_organisasi` (`id`)
  ON DELETE SET NULL ON UPDATE CASCADE;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`fasilitas`
-- Deskripsi: Tabel baru untuk menampilkan daftar fasilitas sekolah.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`fasilitas` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `is_active` ENUM('0', '1') NOT NULL DEFAULT '1',
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `sekolahku_ppdb`.`chats`
-- Deskripsi: Tabel baru untuk fitur chat antara pendaftar dan admin.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sekolahku_ppdb`.`chats` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sender_id` BIGINT UNSIGNED NOT NULL, -- ID pengguna pengirim pesan (FK ke users.id)
  `receiver_id` BIGINT UNSIGNED NOT NULL, -- ID pengguna penerima pesan (FK ke users.id)
  `message` TEXT NOT NULL,
  `timestamp` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_read` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Tambahkan Foreign Key setelah tabel `users` dibuat
ALTER TABLE `sekolahku_ppdb`.`chats`
ADD CONSTRAINT `fk_chats_sender_id`
  FOREIGN KEY (`sender_id`)
  REFERENCES `sekolahku_ppdb`.`users` (`id`)
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `sekolahku_ppdb`.`chats`
ADD CONSTRAINT `fk_chats_receiver_id`
  FOREIGN KEY (`receiver_id`)
  REFERENCES `sekolahku_ppdb`.`users` (`id`)
  ON DELETE CASCADE ON UPDATE CASCADE;

-- Jangan lupa untuk menjalankan perintah COMMIT jika Anda tidak menggunakan START TRANSACTION/COMMIT di awal dan akhir script.
COMMIT;