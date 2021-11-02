function postedBy(parent, args, ctx) {
  return ctx.prisma.link.findUnique({ where: { id: parent.id } }).postedBy()
}

module.exports = {
  postedBy
}