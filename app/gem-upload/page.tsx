const handleUpload = async () => {
  try {
    let gemImageUrl = "";
    let certificateImageUrl = "";

    // Upload Gem Image
    if (gemImage) {
      const gemFileName =
        Date.now() + "-" + gemImage.name;

      const { error: gemError } =
        await supabase.storage
          .from("gem-images")
          .upload(gemFileName, gemImage);

      if (gemError) {
        alert(gemError.message);
        return;
      }

      const { data } = supabase.storage
        .from("gem-images")
        .getPublicUrl(gemFileName);

      gemImageUrl = data.publicUrl;
    }

    // Upload Certificate Image
    if (certificateImage) {
      const certFileName =
        Date.now() + "-" + certificateImage.name;

      const { error: certError } =
        await supabase.storage
          .from("certificate-images")
          .upload(certFileName, certificateImage);

      if (certError) {
        alert(certError.message);
        return;
      }

      const { data } = supabase.storage
        .from("certificate-images")
        .getPublicUrl(certFileName);

      certificateImageUrl = data.publicUrl;
    }

    const { error } = await supabase
      .from("gems")
      .insert([
        {
          gem_name: gemName,
          gem_type: gemType,

          price: Number(gemPrice),
          carat: Number(gemCarat),

          certificate_no: certificateNo,

          origin_country: originCountry,
          origin_region: originRegion,

          treatment: treatment,
          color: color,
          shape: shape,

          dimensions: dimensions,
          transparency: transparency,

          laboratory: laboratory,

          description: description,

          seller_name: sellerName,

          gem_image: gemImageUrl,

          certificate_image:
            certificateImageUrl,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Gem Uploaded Successfully");

    setGemName("");
    setGemType("");
    setGemPrice("");
    setGemCarat("");
    setOriginCountry("");
    setOriginRegion("");
    setTreatment("");
    setColor("");
    setShape("");
    setDimensions("");
    setTransparency("");
    setLaboratory("");
    setCertificateNo("");
    setSellerName("");
    setDescription("");

    window.location.href = "/marketplace";
  } catch (err) {
    console.error(err);
    alert("Upload Failed");
  }
};
