<template>
  <nav class="navbar bg-primary navbar-expand-lg text-white" id="cuerpoNavBar">
    <div class="container-fluid" id="contenedorPrincipal">
      <a class="navbar-brand text-white" href="#">🌳 Knowledge Tree</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
          <a class="nav-link text-white" href="#">Features</a>
          <a class="nav-link text-white" href="#">Pricing</a>
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/scss/_colors.scss";
</style>
