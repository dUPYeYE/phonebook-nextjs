import React, { useEffect, useState } from 'react';

const Partners = ({ darkMode }) => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetchPartners();
  }, []);

  async function fetchPartners() {
    try {
      const response = await fetch('http://127.0.0.1:5556/api/partners');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setPartners(data);
    } catch (error) {
      console.error('Error fetching partners:', error);
    }
  }

  async function filterPartnersTable() {
    try {
      const filter = document.getElementById('filter').value.toLowerCase();
      let response;
      if (filter.length > 0) {
        response = await fetch(`http://127.0.0.1:5556/api/partners?filter=${filter}`);
      } else {
        response = await fetch('http://127.0.0.1:5556/api/partners');
      }
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setPartners(data);
    } catch (error) {
      console.error('Error fetching partners:', error);
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className='bg-blue-50 dark:bg-slate-800 text-black dark:text-white px-3 md:px-8 lg:px-15'>
        <section className='min-h-screen text-neutral-900 dark:text-gray-100'>
          <h1 className='text-3xl text-sky-700 dark:text-sky-500 mb-8 pt-6'>List of our partners</h1>

          <div className='py-3'>
            <input
              className='bg-blue-50 dark:bg-slate-800 border-b-2 border-sky-200 dark:border-sky-900 focus:outline-none'
              onInput={ filterPartnersTable }
              type="search"
              placeholder="Search for name or phone"
              name="filter"
              id="filter"
            />
          </div>

          <table className="text-center striped table-auto w-full border-2 border-collapse border-sky-200 dark:border-sky-900">
            <thead className='bg-blue-100 dark:bg-slate-700'>
              <tr>
                <th>#</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Phone number</th>
              </tr>
            </thead>

            <tbody className='border-2 border-collapse border-sky-200 dark:border-sky-900'>
              {partners.map((partner) => (
                <tr>
                  <td className='border-2 border-collapse border-sky-200 dark:border-sky-900'>{partner.partner_id}</td>
                  <td className='border-2 border-collapse border-sky-200 dark:border-sky-900'>{partner.first_name}</td>
                  <td className='border-2 border-collapse border-sky-200 dark:border-sky-900'>{partner.last_name}</td>
                  <td className='border-2 border-collapse border-sky-200 dark:border-sky-900'>{partner.phone_number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Partners;

