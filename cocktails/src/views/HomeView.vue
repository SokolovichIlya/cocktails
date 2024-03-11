<script setup lang="ts">
import cocktailConfig from '@/configs/cocktails'
import { useRouter } from 'vue-router'

const router = useRouter()

router.push({ name: 'cocktail.item', params: { cocktailCode: cocktailConfig[0].code } })
</script>