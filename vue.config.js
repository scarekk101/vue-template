const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')


function loadEnvByFileName (name) {
	const localEnvPath = path.resolve(__dirname, `../${name}`)
	if (fs.existsSync(localEnvPath)) {
		const envConfig = dotenv.parse(fs.readFileSync(localEnvPath))
		for (const variable in envConfig) {
			process.env[variable] = envConfig[variable]
		}
	}
}

loadEnvByFileName('.env')


module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            }
        }
    },
    css: {
      loaderOptions: {
        sass: {
          additionalData: 
            `@import "@/assets/styles/scss/main.scss";`
        }
      }
    }
  };