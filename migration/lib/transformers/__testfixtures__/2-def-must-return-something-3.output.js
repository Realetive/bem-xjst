block('image').mod('name', 'maestro').def()(function() {
    var newCtx = this.ctx;
    newCtx.alt = 'maestro';
    return applyCtx(newCtx);
});
