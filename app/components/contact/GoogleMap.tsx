export default function GoogleMap() {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-[#E2E0D4]">
      <iframe
        title="Micro Academy - Domlur Ring Road, Bangalore"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0115558474927!2d77.63498907507754!3d12.96122348735284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d6e53e9e5b%3A0x9e5f2e940bf1484d!2sDomlur%20Ring%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1713357000000!5m2!1sen!2sin"
        width="100%"
        height="220"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </div>
  );
}
