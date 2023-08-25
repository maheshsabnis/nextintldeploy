/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      
      },
      /* Supress the Build Errors and generate the Dev Build */
      typescript:{
        ignoreBuildErrors:true
      }
}

module.exports = nextConfig
