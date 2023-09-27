<script>
	import Icon from '@iconify/svelte';

	const countryFlagMap = {
		ARG: 'twemoji:flag-argentina',
		BRA: 'twemoji:flag-brazil',
		BOL: 'twemoji:flag-bolivia',
		COL: 'twemoji:flag-colombia',
		CR: 'twemoji:flag-costa-rica',
		ECU: 'twemoji:flag-ecuador',
		MEX: 'twemoji:flag-mexico',
		PAR: 'twemoji:flag-paraguay',
		PER: 'twemoji:flag-peru',
		URU: 'twemoji:flag-uruguay',
		VEN: 'twemoji:flag-venezuela',
	};

	export let items = [
		{ name: 'CFG or CFS', countries:['ARG', 'BRA', 'BOL', 'COL', 'CR', 'ECU', 'MEX', 'PAR', 'PER', 'URU', 'VEN'] },
		{ name: 'ISO 13485 Certificate (manufacturing site)', countries: ['BRA', 'COL', 'CR', 'ECU', 'PER', 'VEN'] },
		{ name: 'ISO 13485 Reports (manufacturing site)', countries: 'BRA' },
		{ name: 'ISO 9001 Certificate (manufacturing site)', countries: 'BRA' },
		{ name: 'Technical File or STED/ToC', countries: ['ARG', 'BRA', 'BOL', 'COL', 'CR', 'ECU', 'PAR', 'PER', 'URU', 'VEN'] },
		{ name: 'Risk Management plan, reports and matrix', countries: ['BRA', 'COL', 'CR', 'PER'] },
		{ name: 'Essential Requirements or General Safety and Performance Requirements Checklist', countries:['ARG', 'BRA', 'BOL', 'COL', 'ECU', 'PAR', 'PER', 'URU'] },
		{ name: 'List of Standards', countries:['BRA', 'COL', 'ECU', 'PER' ]},
		{ name: 'Physical and Mechanical Characterization testing reports (e.g. fatigue, torsion, torque testing)', countries: ['BRA', 'BOL', 'MEX', 'PER'] },
		{ name: 'Chemical/Material Characterization testing reports', countries:['BRA', 'COL', 'PER'] },
		{ name: 'Biocompatibility Evaluation reports', countries: ['BRA', 'COL', 'CR', 'ECU', 'MEX', 'PER'] },
		{ name: 'Pyrogenicity Evaluation reports', countries:['BRA', 'COL', 'ECU', 'PER'] },
		{ name: 'Safety of Materials of Biological Origin Reports/Certificates (e.g. certificate of abattoir inspection)', countries: ['BRA', 'PER'] },
		{ name: 'Sterilization Validation reports', countries: ['BRA', 'BOL', 'COL', 'CR', 'ECU', 'MEX', 'PER', 'URU'] },
		{ name: 'Residual Toxicity (e.g. EO residual)', countries: ['BRA', 'BOL', 'COL', 'ECU', 'MEX', 'PER'] },
		{ name: 'Cleaning and Disinfection Validation', countries: 'BRA' },
		{ name: 'Usability/Human Factors reports (check if clinical study considered usability endpoints)', countries: ['BRA', 'CR', 'PER'] },
		{ name: 'Packaging and shelf-life validation reports mentioning the storage conditions to be claimed on label', countries: ['BRA', 'BOL', 'COL', 'CR', 'ECU', 'MEX', 'PER'] },
		{ name: 'Clinical Evaluation report', countries: ['BRA', 'BOL', 'COL', 'CR', 'MEX','PER'] },
		{ name: 'Design Output', countries: ['BRA', 'MEX'] },
		{ name: 'Design Validation & Verification reports', countries: ['BRA', 'BOL', 'COL', 'ECU', 'MEX', 'PER', 'VEN'] },
		{ name: 'IFU', countries: ['ARG', 'BRA', 'BOL', 'COL', 'CR', 'ECU', 'MEX', 'PAR', 'PER', 'URU', 'VEN'] },
		{ name: 'Product Drawings', countries: ['ARG', 'BRA', 'COL', 'ECU', 'MEX', 'PER'] },
		{ name: 'Package Labels', countries: ['ARG', 'BRA', 'BOL', 'COL', 'CR', 'ECU', 'PAR', 'PER', 'URU', 'VEN'] },
		{ name: 'Comparative table between the UPNs/Models', countries: ['BRA', 'COL', 'CR', 'ECU'] },
		{ name: 'Raw material of each component of the product', countries: ['BRA', 'PER'] },
		{ name: 'Raw Material Certificates', countries: ['BRA', 'MEX'] },
		{ name: 'Raw material of each primary and secondary packaging', countries: ['BRA', 'MEX'] },
		{ name: 'Description of Device Packaging & Packaging configurations ', countries: ['BRA', 'COL', 'CR', 'ECU', 'MEX', 'PER'] },
		{ name: 'Flowchart of manufacturing process', countries: ['ARG', 'BRA', 'BOL', 'COL', 'CR', 'ECU', 'MEX', 'PAR', 'PER', 'URU'] },
		{ name: 'Disposal Method', countries: 'COL' },
		{ name: 'Lot Assignment Method', countries: 'ECU' },
		{ name: 'Technical data sheet', countries: 'ECU' },
		{ name: 'GMDN, UDI Code', countries: ['COL', 'CR', 'PER'] },
		{ name: 'Samples of the finished Product', countries: 'VEN' },
		{ name: 'DHR / Finished Product Inspection Reports / CoA', countries: 'MEX' },
	];

	export let declarations = [
		{ name: 'Global Market History', countries:['ARG', 'BRA', 'COL'] },
		{ name: 'UPNs Declaration (commercial presentation change)', countries:'BRA' },
		{ name: 'DoC', countries: ['COL', 'ECU', 'PAR', 'PER'] },
		{ name: 'Quality Agreement', countries: 'CR' },
		{ name: 'Affidavit', countries: ['COL', 'ECU'] },
	];


	let selectedCountries = [];

	let isOpen = false;

	const toggleDropdown = () => {
		isOpen = !isOpen;
	};

</script>

<div class="overflow-x-auto master-height">
	<table class="table w-full">
		<thead>
			<tr>
				<th class="whitespace-nowrap text-base font-extrabold">Submission</th>
				<th class="relative text-base font-extrabold">
					Countries
					<div class="relative inline-block text-left">
						<div>
							<button type="button" class="btn btn-outline text-xs ml-2 filter-btn" id="options-menu" aria-haspopup="true" aria-expanded="true" on:click={toggleDropdown}>
								Filter
							</button>
						</div>
						{#if isOpen}
						<div class="dropdown-content origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
							<div class="py-1 text-lg bg-base-100" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
								{#each Object.keys(countryFlagMap) as country}
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-no-static-element-interactions -->
								<div class="dropdown-item" on:click={() => { if (selectedCountries.includes(country)) { selectedCountries = selectedCountries.filter(c => c !== country); } else { selectedCountries = [...selectedCountries, country]; } }} class:selected={selectedCountries.includes(country)}>
									{#if country === 'ARG'}
										<span>Argentina</span>
									{:else if country === 'BRA'}
										<span>Brazil</span>
									{:else if country === 'BOL'}
										<span>Bolivia</span>
									{:else if country === 'COL'}
										<span>Colombia</span>
									{:else if country === 'CR'}
										<span>Costa Rica</span>
									{:else if country === 'ECU'}
										<span>Ecuador</span>
									{:else if country === 'MEX'}
										<span>Mexico</span>
									{:else if country === 'PAR'}
										<span>Paraguay</span>
									{:else if country === 'PER'}
										<span>Peru</span>
									{:else if country === 'URU'}
										<span>Uruguay</span>
									{:else if country === 'VEN'}
										<span>Venezuela</span>
									{/if}
								</div>
								{/each}
							</div>
						</div>
						{/if}
					</div>
				</th>
			</tr>
		</thead>
		<tbody>
      		{#each items as { name, countries }}
        		{#if selectedCountries.length === 0 || selectedCountries.some(selected => (typeof countries === 'string' ? [countries] : countries).includes(selected))}
          			<tr class="md:table-row overflow-x-auto">
            			<td class="md:table-cell whitespace-normal">{name}</td>
            			<td class="md:table-cell whitespace-normal">
              				{#each typeof countries === 'string' ? [countries] : countries as country}
                				{#if countryFlagMap[country]}
                  					<span class="text-3xl">
                    					<Icon icon={countryFlagMap[country]} class="text-xxl inline"/>
                  					</span>
                				{/if}
              				{/each}
            			</td>
          			</tr>
        		{/if}
      		{/each}
    	</tbody>
	</table>



	<table class="table w-full mt-10">
		<thead>
			<tr>
				<th class="whitespace-nowrap font-extrabold text-base">Specific Declarations</th>
			</tr>
		</thead>
		<tbody>
      		{#each declarations as { name, countries }}
        		{#if selectedCountries.length === 0 || selectedCountries.some(selected => (typeof countries === 'string' ? [countries] : countries).includes(selected))}
          			<tr class="md:table-row overflow-x-auto">
            			<td class="md:table-cell whitespace-normal">{name}</td>
            			<td class="md:table-cell whitespace-normal">
              				{#each typeof countries === 'string' ? [countries] : countries as country}
                				{#if countryFlagMap[country]}
                  					<span class="text-3xl">
                    					<Icon icon={countryFlagMap[country]} class="text-xxl inline"/>
                  					</span>
                				{/if}
              				{/each}
            			</td>
          			</tr>
        		{/if}
      		{/each}
    	</tbody>
	</table>
</div>

<style lang="postcss">
	.dropdown-content {
		position: absolute;
		width: 8rem;
		z-index: 1;
	}
	.dropdown-item {
		padding: 8px 16px;
		cursor: pointer;
	}
	.dropdown-item:hover {
		background-color: #f0f0f0;
	}
	.selected {
		background-color: #e0e0e0; 
	}
	.filter-btn {
		min-height: 2rem;
		height: 2rem;
	}
	.master-height {
		min-height: 36rem;
	}
</style>