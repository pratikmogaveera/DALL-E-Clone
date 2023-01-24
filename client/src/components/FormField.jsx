import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
    return (
        <div>
            <div className='flex items-center gap-2 mb-1'>
                <label
                    htmlFor={name}
                    className='block text-md text-[18px] font-medium text-gray-900'
                >
                    {labelName}
                </label>
                {isSurpriseMe &&
                    <button type="button" onClick={handleSurpriseMe} className='font-semibold text-md bg-[#ececf1] py-2 px-4 rounded-md text-black'>
                        Surprise Me
                    </button>
                }
            </div>
            <input 
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className='bg-gray-50 border-[3px] border-gray-300 text-gray-900 font-medium rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full px-3 py-2'
            />
        </div>
    )
}

export default FormField