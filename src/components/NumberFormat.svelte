<script>
  export let value;

  // Define a formatter for the currency, e.g., USD
  const formatter = new Intl.NumberFormat('fr-FR', {
    // style: 'currency',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  // Format the value as currency
  $: formattedValue = formatter.format(value);
</script>

<!-- Render the formatted value -->
<span>{formattedValue}</span>
