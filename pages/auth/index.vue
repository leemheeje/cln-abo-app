<template>
  <div class="pg-auth-wrap">
    <bx-input-field
      v-model="testModel"
      placeholder="asdf"
      :dir-focus="true"
      :is-error="true"
      info-message="에러메sdfsdf시지?"
    />
    <bx-input-field
      v-model="testModel2"
      placeholder="asdf"
      :dir-focus="true"
      :is-error="true"
      info-message="에러메시지?"
    />
    <input id="pg-gl-pw" v-model="testModel2" type="password" />{{ testModel2 }}
    <button>button</button>
    <button v-if="!isAuthKakao" @click="handlerAuthSnsLogin('kakao')">카카오</button>
    <template v-else>
      <button @click="handlerAuthSnsLogout('kakao')">로그아웃</button>
    </template>
    {{ getAuthKakaoUserInfo }}
    {{ testModel }}
  </div>
</template>
<script>
import BxInputField, {INPUT_FILTER} from '~/components/common/BxInputField'
export default {
  components: {
    BxInputField
  },
  data() {
    return {
      userInfo: null,
      Kakao: null,
      isAuthKakaoToken: ``,
      // test
      testModel: '',
      INPUT_FILTER,
      testModel2: ''
    }
  },
  head() {
    return {
      script: [
        {
          type: 'text/javascript',
          src: '/js/plugins/kakao.min.js'
        }
      ]
    }
  },
  computed: {
    isAuthKakao() {
      return this.$store.getters['auth/kakao/isAuth']
    },
    getAuthKakaoUserInfo() {
      return this.$store.getters['auth/kakao/getUserNm']
    }
  },
  watch: {},
  mounted() {
    if (window.Kakao) {
      this.Kakao = window.Kakao
    }
  },
  methods: {
    async handlerAuthSnsLogout(gubun) {
      switch (gubun) {
        case 'kakao':
          await this.$store.dispatch('auth/kakao/kakaoLogout', true)
          alert('로그아웃')
          break
      }
    },
    async handlerAuthSnsLogin(gubun) {
      switch (gubun) {
        case 'kakao':
          if (this.Kakao) {
            await this.$store.dispatch('auth/kakao/kakaoLogin', this.Kakao)
          }
          break
      }
    }
  }
}
</script>
