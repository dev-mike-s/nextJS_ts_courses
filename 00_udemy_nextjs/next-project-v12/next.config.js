// root/next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: true,

    // Compiler-Optionen (v12 nutzte SWC, den schnellen Rust-Compiler)
    swcMinify: true,
}

module.exports = nextConfig