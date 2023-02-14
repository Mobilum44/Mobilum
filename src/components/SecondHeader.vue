<template>
  <header class="header">
    <div class="fit-content header__content">
      <nav>
        <ul>
          <li>
            <g-link
              class="nav__link"
              to="/Accueil/"
            >
              Accueil
            </g-link>
          </li>
          <li>
            <g-link
              class="nav__link"
              to="/Entreprise/"
            >
              L'entreprise
            </g-link>
          </li>
          <li>
            <g-link
              class="nav__link"
              to="/Offre/"
            >
              La collection
            </g-link>
          </li>
          <li>
            <g-link
              class="nav__link"
              to="/Contact/"
            >
              Contact
            </g-link>
          </li>
          <li>
            <g-link
              class="nav__link"
              to="/Taches/"
            >
              🔎
            </g-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
	components: {
	},

	
	mounted() {
		this.$nextTick(() => {
			window.addEventListener("scroll", () => {
				let header = document.getElementsByTagName("header")[0];
				let img = document.getElementsByClassName("header__svg")[0];
				if (document.documentElement.scrollTop >= window.innerHeight / 2) {
					img.classList.add("header__svg--mini");
				} else {
					img.classList.remove("header__svg--mini");
				}
			})
		});
	}
}
</script>

<style lang="scss">

ul,li{
  list-style  : none;
}


nav {
	display: flex;
	align-items: center;

	> ul {
		display: flex;

		li {
			margin-right: 0;

			&:last-child {
				margin: 0;
			}
		}
	}
}


.header {
	position: fixed;
    z-index: 999;
	width: 100vw;
	top: 0;
	left: 0;
	padding-top: 2vh;
	padding-bottom: 2vh;

	&__content {
		display: flex;
		justify-content: center;
		flex-direction: row;
		padding-top: 0;
		padding-bottom: 0;
	}

	&__svg {
		width: 48px;
		transition: all 0.3s ease-in-out;
	}

	&__svg--mini {
		width: 36px;
		transition: all 0.3s ease-in-out;
	}

}

@media screen and (max-width: 120wh) {
	.header {
		&__content {
			flex-direction: column;
			align-items: center;
		}

		&__svg {
			width: 36px;
            height: 100%;
		}

		&__svg--mini {
			width: 24px;
            height: 100%;
		}

		&__title {
			font-size: 10;
		}

		nav {
			margin-top: 0;
			width: 100%;
			
			ul {
				width: 100%;
				display: flex;
				justify-content: space-between;
			}

			li {
				margin: 0;
			}
		}
	}
}

</style>
