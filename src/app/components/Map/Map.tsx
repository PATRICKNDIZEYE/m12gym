'use client'

export const Map = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4891711681007!2d30.0575743!3d-1.9441313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5d5f7590b8d%3A0x33a7e7fdf618ea9!2sMU12%20FITNESS%20GYM!5e0!3m2!1sen!2srw!4v1710622183007!5m2!1sen!2srw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MU12 FITNESS GYM Location"
          />
        </div>
      </div>
    </section>
  )
} 