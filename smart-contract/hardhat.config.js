require('@nomiclabs/hardhat-waffle')
require('dotenv').config({ path: '.env' })

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/VCqy-O1oVjcMmPtIxUs12wmsPNw1uKBm',
      accounts: ['e48fcbcd6118a698edcd91fc169b60b3d2fa00c3fbabe3f0fb63577d654c78d2'],
    },
  },
}