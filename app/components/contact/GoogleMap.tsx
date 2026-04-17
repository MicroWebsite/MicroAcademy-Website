export default function GoogleMap() {
  return (
    <div className="w-full rounded-xs overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
      <iframe
        title="Micro Academy - Domlur Ring Road, Bangalore"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.251795591191!2d77.64082877513412!3d12.955733187358188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14054affffff%3A0xa88aac51a28a3209!2sMicro%20Academy%20Private%20Limited!5e0!3m2!1sen!2sin!4v1776430962701!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </div>
  );
}
