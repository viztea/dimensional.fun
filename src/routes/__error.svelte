<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                code: status,
                msg: error.message
            }
        };
    }
</script>

<script>
    export let code;
    export let msg;
</script>

<div class="flex h-screen px-10">
    <div class="block text-center items-center m-auto">
        <div class="flex text-center items-center pb-6">
            <span class="font-bold text-5xl border-r-1 pr-6 mr-6">{code}</span>
            <span>{msg}</span>
        </div>
    </div>
</div>
