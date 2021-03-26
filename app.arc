@app
shopping

@static
folder public

@http
get /
get /cart
get /checkout
post /cart
post /cart/delete
post /cart/update


@tables
data
  scopeID *String
  dataID **String
  ttl TTL

# @aws
# profile default
# region us-west-1
