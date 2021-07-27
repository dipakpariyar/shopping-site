import React from 'react'

export default function test() {
  return (
    <div>
       <div className="specification_title">
            <h3><b>Specifications</b></h3>
          </div>
          <div className="product_specification_wrapper">

            <div className="product_category_wrapper">
              <div className="product_category">Product Category
                </div>
              <div className="installation_wrapper">
                <div className="product_installation">Installation Type</div>
                <div className="installation_type">Floor Standing</div>
              </div>
            </div>

            {/* manufacurer details * */}
            <div className="manufacturer_details_wrapper">
              <div className="manufacturer_details">Manufacturer Details
                </div>
              <div className="brand_wrapper">
                <div className="product_brand">Brand</div>
                <div className="brand">Croma</div>
              </div>
            </div> 
            {/* features of products */}
            <div className="product_features_wrapper">
              <div className="features_title">Features 
              </div>
              <div className="features_wrapper">
                <div className="features_items">
                  <div className="div1">Max Spin Speed</div>
                  <div className="div2">Speed Settings</div>
                  <div className="div3">Inverter Compatibility</div>
                </div>
                <div className="features_items_ans">
                  <div className="sub_div1">1350 rpm</div>
                  <div className="sub_div2">3</div>
                  <div className="sub_div3">Yes</div>
                </div>
              </div>
            </div>

            {/* physical attributes  */}
            <div className="physical_attributes_wrapper">
              <div className="physical_attributes_title">Physical Attributes
              </div>
              <div className="physical_attributes_wrapper">
                <div className="physical_attributes_items">
                  <div className="div1">No. of Blades</div>
                  <div className="div2">Control Types</div>

                </div>
                <div className="physical_attributes_items_ans">
                  <div className="sub_div1">3</div>
                  <div className="sub_div2">Button</div>

                </div>
              </div>
            </div>

            {/* Plug Details */}

            <div className="plug_details_wrapper">
              <div className="plug_details_title">Plug Details
              </div>
              <div className="plug_details_wrapper">
                <div className="plug_details_items">
                  <div className="div1">Power</div>
                  <div className="div2">Voltage Rating</div>
                  <div className="div3">Frequency</div>
                </div>
                <div className="plug_details_items_ans">
                  <div className="sub_div1">45 W</div>
                  <div className="sub_div2">220 - 240 V</div>
                  <div className="sub_div3">50 Hz</div>

                </div>
              </div>
            </div>

            {/* Product Aesthetics */}

            <div className="product_aesthetics_wrapper">
              <div className="product_aesthetics_title">Product Aesthetics
              </div>
              <div className="product_aesthetics_items_wrapper">
                <div className="product_aesthetics_items">
                  <div className="div1">Color</div>
                  <div className="div2">Color Family</div>

                </div>
                <div className="product_aesthetics_items_ans">
                  <div className="sub_div1">Black</div>
                  <div className="sub_div2">Black</div>

                </div>
              </div>
            </div>

            {/* In The Box */}

            <div className="box_details_wrapper">
              <div className="plug_details_title">In The Box
              </div>
              <div className="box_wrapper">
                <div className="box_items">
                  <div className="div1">Generic Name</div>
                  <div className="div2">Accessories</div>
                  <div className="div3">Documents</div>
                </div>
                <div className="box_items_ans">
                  <div className="sub_div1">Fan</div>
                  <div className="sub_div2">Not Available</div>
                  <div className="sub_div3">User Manual | Warranty Card</div>

                </div>
              </div>
            </div>

            {/* Product Dimensions (Open) */}

            <div className="product_dimensions_wrapper">
              <div className="product_dimensions_title">Product Dimensions
              </div>
              <div className="product_dimensions_items_wrapper">
                <div className="product_dimensions_items">
                  <div className="div1">Dimensions in cm (WxDxH)</div>
                  <div className="div2">Dimensions in Inches (WxDxH)</div>

                </div>
                <div className="product_dimensions_items_ans">
                  <div className="sub_div1">Not Available</div>
                  <div className="sub_div2">Not Available</div>

                </div>
              </div>
            </div>

            {/* After Sales & Services */}

            <div className="box_details_wrapper">
              <div className="plug_details_title">After Sales & Services
              </div>
              <div className="box_wrapper">
                <div className="box_items">
                  <div className="div1">Standard Warranty Period</div>
                  <div className="div2">Warranty Type</div>
                  <div className="div3">Installation & Demo</div>
                </div>
                <div className="box_items_ans">
                  <div className="sub_div1">24 Months</div>
                  <div className="sub_div2">Carry-In</div>
                  <div className="sub_div3">Not Applicable</div>

                </div>
              </div>
            </div>


            {/* company contact information */}

             <div className="company_contact_information">
              <div className="company_contact_title">Company Contact Information</div>
              <div className="upper_wrapper">
                <div className="information_items">
                  <div className="div1">Manufacturer/Importer/Marketer Name & Address</div>
                  <div className="div2">Customer Support Number</div>
                  <div className="div3">Customer Support Email</div>
                </div>
                <div className="information_items_ans">
                  <div className="sub_div1">Infiniti Retail Limited | Unit No. 701 702 7th Floor</div>
                  <div className="sub_div2">7207666000</div>
                  <div className="sub_div3">customersupport@croma.com</div>
                </div>
                <div className="information_items_ans">
                  <div className="sub_div1">Kaledonia Sahar Road Andheri East Mumbai- 400 069</div>

                </div>
              </div>
              <div className="lower_wrapper">
                <div className="information_items">
                  <div className="div1">Country of Manufacture</div>
                  <div className="div2">Country of Brand Origin</div>
                </div>
                <div className="information_items_ans">
                  <div className="sub_div1">China</div>
                  <div className="sub_div2">India</div>
                </div>
              </div>
            </div> 
 










          </div>
    </div>
  )
}
