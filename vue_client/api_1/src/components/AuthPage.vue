<template>
    <div id = "AuthForm">
    <form>
        <div class="form-group">
            <label for="AuthPageLogin">Email address</label>
            <input type="email" class="form-control" id="AuthPageLogin" aria-describedby="emailHelp" placeholder="Enter email">           
        </div>
        <div class="form-group">
            <label for="AuthPagePass">Password</label>
            <input type="password" class="form-control" id="AuthPagePass" placeholder="Password">
        </div>       
        <button type="submit" class="btn btn-primary">LogMe</button>
        <button type="submit" class="btn btn-warning">RegMe</button>
    </form>
    </div>
</template>

<script>
    export default {
        name : 'AuthPage',
        props : {

        }
    }
</script>

<style lang = "scss">  
    #AuthForm {
        position: absolute;
        width: 30%;
        left : 60%;
    }
    #AuthPageLogin, #AuthPagePass {
        text-align: center;
    }
</style>
