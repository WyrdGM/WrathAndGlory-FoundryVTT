export class Level4TextPageSheet extends JournalTextPageSheet {

    async getData() {
        let data = await super.getData();
        data.headingLevels[4] = "Level 4"
        return data
    }

    // Extend buildTOC to not include headers that have the `no-toc` class
    static _removeNoTOC() {
    
        let buildTOC = JournalEntryPage.buildTOC
    
        JournalEntryPage.buildTOC = function(html) {
            let toc = buildTOC.bind(this)(html)
            for(let slug in toc)
            {
                if (toc[slug].element.classList.contains("no-toc"))
                    delete toc[slug]
            }
            return toc
        }
    }
}

