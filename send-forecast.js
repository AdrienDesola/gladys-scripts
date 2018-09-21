gladys.location.getUser({ id: this.context.user})
  .then(gladys.weather.get)
  .then(weather => {
    return gladys.user.getById({id: this.context.user})
      .then(user => gladys.notification.create({
        title: 'Good Morning',
        text: `
        Good Morning ${user.firstname} !
        
        Here is today's forcast
        Weather: ${weather.weather}
        Temperature: ${weather.temperature} °C
        Humidity: ${weather.humidity * 100} %
        
        Have a nice day !
        `,
        icon: 'fa fa-weather',
        iconColor: 'blue',
        user: this.context.user
      })
  )
})
