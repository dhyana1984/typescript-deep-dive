function processEntity(entity?: { name: string }) {
  let a = entity.name //e could be null
  let b = entity!.name //e is not null
}
