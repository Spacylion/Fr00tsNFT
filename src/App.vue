<template>
  <div class="side">
    <div
      class="
        w-screen
        h-screen
        flex flex-col
        justify-between
        items-center
        content-center
        relative
        transition-all
        ease-out
        duration-500
      "
    >
      <div
        class="
          relative
          mx-4
          w-5/6
          h-28
          md:h-1/4
          lg:h-1/3
          mt-20
          md:mt-12
          transition-all
          ease-out
          duration-500
        "
      >
        <span>
          <img
            alt="Head"
            src="./images/ezgif.gif"
            class="
              absolute
              inset-0
              box-border
              p-0
              m-auto
              block
              w-0
              h-0
              min-w-full
              max-w-full
              min-h-full
              max-h-full
              object-contain
            "
          />
        </span>
      </div>
      <div
        class="
          relative
          mx-4
          w-full
          h-full
          sm:p-0
          md:h-1/4
          lg:h-full
          md:mt-12
          transition-all
          ease-out
          duration-500
        "
      >
        <span class="cursor-pointer">
          <img
            alt="Head"
            src="./images/froooooots.gif"
            class="
              scale-x--100
              border-b-2
              absolute
              inset-0
              p-0
              m-auto
              block
              w-0
              h-0
              min-w-full
              max-w-full
              min-h-full
              max-h-full
              object-contain
            "
          />
        </span>
      </div>
      <div
        class="
          relative
          mx-4
          w-1/2
          h-28
          md:h-1/4
          lg:h-1/3
          mt-20
          md:mt-12
          transition-all
          ease-out
          duration-500
        "
      >
        <span>
          <img
            alt="Head"
            src="./images/ooo11.png"
            class="
              absolute
              inset-0
              box-border
              p-0
              m-auto
              block
              w-0
              h-0
              min-w-full
              max-w-full
              min-h-full
              max-h-full
              object-contain
            "
          />
        </span>
      </div>
    </div>
    <button @click="learnVue" class="left">
      <h1 class="big">Disclaimer</h1>
    </button>
    <PopupVue ref="confirmationPopup" class="left1">
      <template #actions="{ confirm }" class="popuptem">
        <h1 class="popuptem">
          By minting or purchasing a fr00t (NFT) you acknowledge that you
          understand you are buying a digital collectible piece of art with no
          utility, no roadmap, and no promises attached. The twitter account has
          been created for the sole purpose of Marketing/promoting these NFTs.
          There are no plans to use the twitter account past the mint date. This
          is not an investment and shouldn’t not be treated as such. There is
          zero expectations for profit. You are buying nothing more than a
          digital picture.
        </h1>

        &nbsp;
        <button @click="confirm" :disabled="isConfirmationCorrect">OK</button>
      </template>
    </PopupVue>

    <div class="fr00ts">
      <div class="button11">
        <div v-if="!getUserAccount">
          <button
            type="button"
            id="connect-wallet"
            class="button"
            @click.prevent="onConnect"
          >
            Connect
          </button>
        </div>
        <div v-else class="col-auto" style="height: 145px">
          <h1 href="" class="button">Connected</h1>
        </div>
      </div>
      <div>
        <h1 class="free">Mint 1 FREE fr00t</h1>
        <div class="flex items-center justify-center">
          <a class="hide" href="">
            <input
              type="number"
              v-model="mintAmount"
              class="
                w-32
                h-12
                lg:h-16
                text-black text-center
                outline-none
                font-semibold
                lg:text-2xl lg:px-2 lg:w-40
              "
            />
          </a>
          <br />

          <div class="flex justify-center items-center space-x-8 pt-2">
            <button
              class="
                button1
                bg-blue-500
                text-white
                h-12
                font-semibold
                lg:h-16
                px-8
                lg:px-10
                rounded-lg
                lg:text-2xl lg:font-bold
                hover:bg-red-400
                duration-300
              "
              id="mint-btn"
              @click.prevent="mintTokenFree"
            >
              {{ mintFreeText }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <select class="inputmint" v-model="mintAmount">
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
    </div>
    <div class="box1 flex justify-center items-center space-x-8">
      <button
        class="
          button1
          bg-blue-500
          text-white
          h-12
          font-semibold
          lg:h-16
          px-8
          lg:px-10
          rounded-lg
          lg:text-2xl lg:font-bold
          hover:bg-red-400
          duration-300
        "
        id="mint-btn"
        @click.prevent="mintToken"
      >
        {{ mintText }}
      </button>
    </div>
    <div class="button-info">
      <div v-if="!getUserAccount"></div>
      <div v-else class="col-auto" style="height: 145px">
        <div>
          <!-- <button
            type="button"
            class="button _app_2DtRB mint"
            @click.prevent="mintToken"
          >
            <a class="button">
              {{ mintText }}
            </a>
          </button> -->
        </div>
        <div>
          <h2 class="inputmint">{{ totalSupply }} / 7,777</h2>
        </div>
      </div>
      <br />
      <br />
      <span class="price">0.003 ETH each</span>
    </div>
    <div class="mint-info">
      <span class="minted-description">fr00ts left:</span>
      <h2 class="effect-holo">{{ totalSupply }} / 7,777</h2>
      <br />
      <br />
      <span class="minted-description red-description"
        ><a href="https://opensea.io/collection/fr00ts"
          >OpenSea collection
        </a></span
      >
      <span class="minted-description red-description"
        ><a
          href="https://etherscan.io/address/0xaa31c8a28c9b66dB7ec8c86be9363d21b10478F7"
          >Etherscan contract</a
        ></span
      >
      <!-- <span class="minted-description">minted fr00ts</span> -->
    </div>
    <a href="https://twitter.com/fr00tsNFT">
      <img src="./images/follow.png" class="fixed right-4 bottom-4" alt="" />
    </a>
  </div>
</template>

<script>
import Web3 from "web3"
import Web3Modal from "web3modal"
import WalletConnectProvider from "@walletconnect/web3-provider"
import { mapActions, mapGetters } from "vuex"
import PopupVue from "./components/Popup.vue"

export default {
  components: { PopupVue },
  name: "Header",

  data() {
    return {
      confirmation: "",
      free: "0",
      cost: "0.003",
      // cost: "0",
      // chainId: "5",
      chainId: "1",
      mintAmount: 1,
      totalSupply: 0,
      web3Modal: "",
      mintText: "MINT",
      mintFreeText: "FREE",
    }
  },
  CONFIRMATION_TEXT: "Agree",

  beforeMount() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: "d85fda7b424b4212ba72f828f48fbbe1",
        },
      },
    }

    this.web3Modal = new Web3Modal({
      providerOptions,
      cacheProvider: false,
      disableInjectedProvider: false,
    })
  },
  methods: {
    ...mapActions("wallet", ["SET_WEB3", "SET_USER_ACCOUNT", "SET_INSTANCE"]),

    async onConnect() {
      try {
        let provider = await this.web3Modal.connect()
        this.onProvider(provider)
      } catch (e) {
        console.log("Could not get a wallet connection", e)
        return
      }
    },

    async onProvider(provider) {
      try {
        let web3 = new Web3(provider)
        let chain = await web3.eth.getChainId()
        console.log(chain)

        if (this.chainId != chain) {
          this.$toasted.show("Connect your wallet to the Ethereum network")
          return
        }

        this.SET_WEB3(web3)

        let accounts = await web3.eth.getAccounts()
        this.SET_USER_ACCOUNT(accounts[0])

        let instance = new this.getWeb3.eth.Contract(
          this.getContractABI,
          this.getContractAddress
        )

        this.SET_INSTANCE(instance)
        this.readValue()
      } catch (e) {
        console.log("Could not get a wallet connection", e)
        return
      }

      provider.on("accountsChanged", (accounts) => {
        this.SET_USER_ACCOUNT(accounts[0])
      })
    },
    async learnVue() {
      this.confirmation = ""

      const popupResult = await this.$refs.confirmationPopup.open()

      if (popupResult) {
        alert("Confirmed!")
      }
    },
    mintTokenFree() {
      if (!this.getUserAccount) {
        this.$toasted.show("Connect You Wallet!")
        return
      }
      if (!this.mintAmount) {
        this.$toasted.show("Enter minting amount")
        return
      }
      this.mintFreeText = "Minting..."

      let gasLimit = Number(this.gasLimit) * Number(this.mintAmount)
      let mintPriceFree = Number(this.mintAmount) * Number(this.free)
      let value = this.getWeb3.utils.toWei(mintPriceFree.toString(), "ether")

      this.getInstance.methods
        .mint(Number(this.mintAmount))
        .send({
          gasLimit: gasLimit,
          from: this.getUserAccount,
          to: this.getContractAddress,
          value: value,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash)
          this.$toasted.show("Transaction is submitted")
        })
        .on("receipt", (receipt) => {
          this.mintFreeText = "FREE"
          this.readValue()
          console.log("Receipt: ", receipt)
          this.$toasted.show("Transaction Completed Successfully")
        })
        .on("error", (error, receipt) => {
          this.mintFreeText = "FREE"
          console.log("Error receipt: ", receipt)
          this.$toasted.show("Transaction Rejected")
        })
    },

    mintToken() {
      if (!this.getUserAccount) {
        this.$toasted.show("Connect You Wallet!")
        return
      }
      if (!this.mintAmount) {
        this.$toasted.show("Enter minting amount")
        return
      }
      this.mintText = "Minting..."

      let gasLimit = Number(this.gasLimit) * Number(this.mintAmount)
      let mintPrice = Number(this.mintAmount) * Number(this.cost)
      let value = this.getWeb3.utils.toWei(mintPrice.toString(), "ether")

      this.getInstance.methods
        .mint(Number(this.mintAmount))
        .send({
          gasLimit: gasLimit,
          from: this.getUserAccount,
          to: this.getContractAddress,
          value: value,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash)
          this.$toasted.show("Transaction is submitted")
        })
        .on("receipt", (receipt) => {
          this.mintText = "MINT NFT"
          this.readValue()
          console.log("Receipt: ", receipt)
          this.$toasted.show("Transaction Completed Successfully")
        })
        .on("error", (error, receipt) => {
          this.mintText = "MINT NFT"
          console.log("Error receipt: ", receipt)
          this.$toasted.show("Transaction Rejected")
        })
    },

    readValue() {
      Promise.all([this.getInstance.methods.totalSupply().call()]).then(
        ([totalSupply]) => {
          this.totalSupply = totalSupply
        }
      )
    },

    addrTruncation(addr) {
      return addr.slice(0, 6) + "…" + addr.slice(addr.length - 4, addr.length)
    },

    disconnect() {
      this.SET_WEB3(null)
      this.SET_INSTANCE(null)
      this.SET_USER_ACCOUNT(null)
    },
  },
  computed: {
    ...mapGetters("wallet", [
      "getWeb3",
      "getUserAccount",
      "getInstance",
      "getContractABI",
      "getContractAddress",
    ]),

    isConfirmationCorrect() {
      return this.confirmation === this.$options.CONFIRMATION_TEXT
    },
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap");

html {
  scroll-behavior: smooth;
}
.hide {
  display: none;
}
.big {
  font-size: 12px;
  font-weight: 900;
  background-color: #aebfff07;

  border-radius: 10px;

  text-decoration: none;
  color: #000;

  width: 160px;
  line-height: 1.3em;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
}
.popuptem {
  text-align: justify;
  padding: 14px;
}
.left {
  position: fixed;
  left: 14px;
  bottom: 14px;
}
.free {
  font-size: 24px;
  font-style: oblique;
}
body {
  width: auto;
  height: 100vh;
  font-family: Sans-Serif;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0px;
  width: 100%;
}
.button11 {
  position: absolute;
  top: 10px;
  right: 10px;
}
.fr00ts {
  align-items: center;
  justify-content: center;
}

.button {
  border-radius: 10px;
  padding: 20px 15px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #000;
  font-size: 28px;
  width: 160px;
  line-height: 1.3em;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  transition: all 0.3s ease 0s;
}

.button:hover {
  border-color: #31ffc1;
  color: #31ffc1;
}

#mint-button:hover {
  border-color: #ff0000;
  color: #ff0000;
}

.inputmint {
  border: 6px solid #000;
  border-radius: 10px;
  padding: 20px 15px;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #000;
  text-transform: lowercase;
  font-size: 28px;
  width: 220px;
  line-height: 1.3em;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  transition: all 0.3s ease 0s;
}

.button-info .price {
  font-size: 28px;
  font-weight: 600;
  text-align: center;
}

.primary .container .main img {
  width: 100%;
}

.side {
  display: grid;
  grid-template-columns: auto;
  place-items: center;
  align-content: center;
  gap: 50px;
  -webkit-animation: bgcolorchange 20s infinite;
  animation: 20s infinite bgcolorchange;
}

@keyframes bgcolorchange {
  0% {
    background-color: #3d7268;
  }

  10% {
    background-color: #b8e9d7;
  }

  20% {
    background-color: #ebe0bb;
  }

  30% {
    background-color: #ffed92;
  }

  40% {
    background-color: #ffffff;
  }

  50% {
    background-color: #fadac8;
  }

  60% {
    background-color: #fefdfb;
  }

  70% {
    background-color: #101010;
  }

  80% {
    background-color: #bcddf7;
  }

  90% {
    background-color: #edece8;
  }

  100% {
    background-color: #aec0ff;
  }
}

/* Chrome, Safari, Opera */
@-webkit-keyframes bgcolorchange {
  0% {
    background: red;
  }

  25% {
    background: yellow;
  }

  75% {
    background: green;
  }

  100% {
    background: blue;
  }
}

select.mint-input {
  border: 5px solid #000;
  font-size: 32px;
  border-radius: 10px;
  width: 120px;
  margin-left: 0px;
  text-align: center;
  padding: 15px 10px;
  font-weight: 600;
}

#mint-button {
  font-size: 38px;
  padding: 30px 15px;
  letter-spacing: 4px;
  align-items: center;
}

.mint-info {
  display: grid;
  gap: 10px;
  place-items: center;
  font-size: 24px;
}

.minted-description.red-description {
  color: #27996b;
  /* to be removed */
}

.minted-description.red-description a {
  color: #27996b;
  /* to be removed */
}

#minted {
  width: 176px;
  height: 37px;
  display: block;
}

#minted img {
  width: 100%;
}

.show-mobile {
  display: none;
}

.button {
  font-weight: bold;
  background-color: #aec0ff;
  padding: 0;
}

@media screen and (max-width: 980px) {
  #logo {
    grid-column: 1 / span 2;
  }
}

@media screen and (max-width: 800px) {
  .header {
    padding: 0 30px;
  }
  .left1 {
    height: 100vh;
  }

  .big {
    font-size: 20px;
    font-weight: bold;
    position: relative;
    left: 10%;
    padding: 0;
    margin: 0;
    bottom: 10px;
    width: 110%;
    background-color: #aec0ff;
  }
  .button {
    font-size: 20px;
    font-weight: bold;
    position: relative;
    right: 55%;
    top: 14px;
    width: 110%;
    background-color: #aec0ff;
    padding: 0;
  }
  .button12 {
    font-size: 20px;
    font-weight: bold;
    position: relative;

    width: 100%;
    background-color: #aec0ff;
    padding: 0;
  }

  .popuptem {
    height: 50vh;
    font-size: 12px;
    padding: 4px;
  }

  .header .container {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  #logo {
    grid-column: 1;
    grid-row: 2;
  }

  #connect-wallet {
    grid-column: 1;
    grid-row: 1;
  }

  .primary {
    margin-top: 20px;
  }

  .primary .container {
    grid-template-columns: 1fr;
    gap: 5px;
  }

  .primary .container .side {
    gap: 30px;
    align-items: top;
    margin-bottom: 30px;
  }

  .hide-mobile {
    display: none;
  }

  .show-mobile {
    display: block;
  }

  .primary .container .main {
    grid-column: 1;
  }

  .primary .container .bottom {
    grid-column: 1;
    grid-row: 2;
  }

  .bottom {
    padding: 0;
    margin-bottom: 10px;
  }
}

#alert-bar {
  -webkit-box-align: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 2px solid #000;
  color: #000000;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 5px 0;
  font-weight: 500;
  min-height: 48px;
  height: auto;
  position: absolute;
  width: 100%;
  top: 0px;
  opacity: 0;
  transition: all 0.3s ease 0s;
  z-index: 10000;
  font-weight: 700;
  line-height: 47px;
  font-size: 18px;
  letter-spacing: 0.5px;
}

#alert-bar a {
  color: #3160ff;
  display: inline-block;
}

#alert-bar .alert-content {
  margin-right: 20px;
  line-height: 1.5em;
}

#close-alert-bar {
  width: 15px;
}

#close-alert-bar img {
  width: 100%;
}

.alert-content a {
  text-decoration: underline;
}

@media (max-width: 680px) {
  #alert-bar {
    position: relative;
    display: none;
    height: auto;
  }

  .alert-content {
    padding-left: 20px;
    padding-right: 20px;
    line-height: 1.5em;
  }

  #close-alert-bar {
    position: absolute;
    right: 10px;
  }
}

.footer {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.footer a {
  color: #000;
  text-decoration: underline;
  font-weight: 600;
  letter-spacing: 1px;
}

.footer a:hover {
  color: #3160ff;
}
</style>
