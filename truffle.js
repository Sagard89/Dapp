module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks:{
	  development: {
	  	  gas: 6700000,
		  host: "localhost",
		  port: 8545,
		  network_id:"*"
	  }
  }
};
