<template>
    <div class="flex justify-around">
        <div class="container w-1/2 pt-20">
            <article class="prose mb-8">
                <h1 class="text-secondary">
                    Para formar parte del grupo, por favor llena este formulario:
                </h1>
            </article>
            <div class="form-control mb-4 prose lg:prose-xl text-primary">
                <label class=" flex items-center gap-2">
                    Nombre y apellido</label>
                <input type="text" class="grow input input-bordered text-primary" placeholder="Escribe tu nombre" />
            </div>
            <div class="form-control mb-4 prose lg:prose-xl">
                <label class=" flex items-center gap-2">
                    Correo electrónico</label>
                <input type="text" class="grow input input-bordered text-primary" placeholder="Escribe tu correo electrónico" />
            </div>
            <div class="form-control mb-4 prose lg:prose-xl">
                <label class=" flex items-center gap-2">
                    Número de teléfono</label>
                <input type="text" class="grow input input-bordered text-primary" placeholder="Escribe tu número de teléfono" />
            </div>
            <div class="flex justify-center items-center w-full">
                <button type="submit" class="btn btn-secondary rounded-xl">Enviar</button>
            </div>
        </div>
        <div class="flex pt-20 w-auto h-screen">
            <img src="../assets/bettina with strawberry.jpg" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormClient',
    };
</script>