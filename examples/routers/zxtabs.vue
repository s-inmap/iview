<template>
    <div>
        <ZX_Tabs v-model="name" @on-click="handleClick">
            <tab-pane name="1" label="标签一">
                <div>1</div>
            </tab-pane>
            <tab-pane name="2" label="标签二">
                <div>2</div>
            </tab-pane>
            <tab-pane name="3" label="标签三">
                <div>3</div>
            </tab-pane>
            <tab-pane name="4" label="标签四">
                <div>4</div>
            </tab-pane>
            <tab-pane name="5" label="标签五">
                <div>5</div>
            </tab-pane>
        </ZX_Tabs>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '1',
        }
    },
    methods: {
        handleClick(name, callback) {
            if (name === '2') {
                //没有动画
                callback(false);
            } else {
                callback(true);
            }
        }
    }
}

</script>
