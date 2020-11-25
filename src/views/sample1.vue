<template>
    <!-- here show text message -->
    <div>
        <div v-if="$store.state.textMessage == 'AAA'">
            AAA
        </div>
        <div v-else-if="$store.state.textMessage == 'BBB'">
            BBB
        </div>
        <div v-else>
            CCC
        </div>
        <!-- {{ $store.state.textMessage }} -->
    </div>
</template>

<script>
export default {
    
}
</script>