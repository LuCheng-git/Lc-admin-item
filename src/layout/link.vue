<template>
  <isComponent v-bind="linkProps(to)">
    <slot />
  </isComponent>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    linkProps(url) {
      if (isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: "_blank",
          rel: "noonpener"
        }
      }
      return {
        is: "router-link",
        to: url
      }
    }
  }
}
</script>
