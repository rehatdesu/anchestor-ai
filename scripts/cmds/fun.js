module.exports = {
  config: {
    name: "fun",//this cmd is based on Nepali users lil bit for indian users 
    aliases: [],
    version: "1.0",
    author: "kshitiz",
    countDown: 20,
    role: 0,
    shortDescription: "",
    longDescription: "bot will send you random video to entertain you",
    category: "entertain",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "let me entertain you wait...🤡",
    });

    const link = [
      "https://drive.google.com/uc?export=download&id=1u0PqzyCmSzXvj5UwAlfHJp3RcM6HluSH",
      "https://drive.google.com/uc?export=download&id=17_0X0NWjLu-Grf8N9mfeY4e6np0eBK3F",
      "https://drive.google.com/uc?export=download&id=1ld9LLIPVt_oMnK-cX8qxSrOFCqA5iEOt",
      "https://drive.google.com/uc?export=download&id=1epS0fYm-dNA5E_j53n8NwOjJZiDIiMM3",
      "https://drive.google.com/uc?export=download&id=1m2bmu5kpd4VmHhf58ejPKzK1gH5x416y",
      "https://drive.google.com/uc?export=download&id=1d1dQ-X1cQhAr4095pYiqX5A8NaBXA9A5",
      "https://drive.google.com/uc?export=download&id=1R4o19pf62CPXoKLMgRT94JHOEMh-6eYi",
      "https://drive.google.com/uc?export=download&id=1S_5DAPGs2gQI-t73Av0cxrpGusIIC-nL",
      "https://drive.google.com/uc?export=download&id=1A8pONy0pqVpSedVFLaNOrG3EprWYqLJZ",
      "https://drive.google.com/uc?export=download&id=12s6n-k7zBncNVa9XGUq07sy4CF_mn0FR",
      "https://drive.google.com/uc?export=download&id=1HvCvoVc5wGYt3EYhRAcRUwJWP8-gsHmD",
      "https://drive.google.com/uc?export=download&id=1Ela3egmAO2jQuk_G8KEGEmsX7mLfgLJf",
      "https://drive.google.com/uc?export=download&id=1qe_33xsM-SbD6Oxm4-iHk2wDfPf3wOc1",
      "https://drive.google.com/uc?export=download&id=1bBcBBqSpVQNTXfRDAjvqt1A78MAzZgcj",
      "https://drive.google.com/uc?export=download&id=1fE3XO_LAuGmkRMOMm2s9iH0-HvFEQ7Q9",
      "https://drive.google.com/uc?export=download&id=1cSXzrFZfPlqZLCIuVfdfwFegWWuL1QOx",
      "https://drive.google.com/uc?export=download&id=1fV-lFfIEkovVfg4apnWp84fQNngJrQTE",
      "https://drive.google.com/uc?export=download&id=180kyR-xzqlS_h0qARHEGN9Keiv2mB7VC",
      "https://drive.google.com/uc?export=download&id=1-Vg02rktcSJARTjLXUhZsRW5-eFY32Lq",
      "https://drive.google.com/uc?export=download&id=1X5iP7p9bS3NH5uPGjtjA3x1FwsaJj93A",
      "https://drive.google.com/uc?export=download&id=1NeB3IizShbZbg77IEHKIwph0Pxs_xP6X",
      "https://drive.google.com/uc?export=download&id=1qh4uSwJ5aobXXfjqNBGcQBsvB3D9MFWt",
      "https://drive.google.com/uc?export=download&id=1kFmPKn8nAFvheiAxNyjaEzOMJsl1k1nj",
      "https://drive.google.com/uc?export=download&id=13PLAlszmxc5hKTSQ-020NoF-SVOvUg2R",
      "https://drive.google.com/uc?export=download&id=1pk02t9Xn93Fw3C5O9SFm9XITYlVwgK3O",
      "https://drive.google.com/uc?export=download&id=1AAD8Mxr1c44ZUBKF1hiXTyzvd8EScwLg",
      "https://drive.google.com/uc?export=download&id=1Vf997hwOmUEv0r8KlUkiqpyc9DaXccuz",
      "https://drive.google.com/uc?export=download&id=1_OsGu6KvbOxxFyTheFEmFvURLTO6Xqib",
      "https://drive.google.com/uc?export=download&id=1_SpUSw_8U0_6C_Vvx3IUouq5kQvx6P7X",
      "https://drive.google.com/uc?export=download&id=1lrM58h_FsZhZwEFu-B0GPv3EfqsWGQM5",
      "https://drive.google.com/uc?export=download&id=1EmxLV4VlJtU3_PRir-D20UDqjmzH3RvP",
      "https://drive.google.com/uc?export=download&id=10GERNUlWEb24XOq6Bhz0OGYr69NbXRaQ",
      "https://drive.google.com/uc?export=download&id=1udFE0YUz0QmzVhVMI8n-EHIqOTx0IUhi",
      "https://drive.google.com/uc?export=download&id=1--CWP-FOTrOzskxx7tCyLPKQDmGnTEnF",
      "https://drive.google.com/uc?export=download&id=1m028E0K9u0Rv4ZBM-bKWnyHksN3xrWV0",
      "https://drive.google.com/uc?export=download&id=18k27HtPcRPwFS9XW2VBWTC53xPp-hbKO",
      "https://drive.google.com/uc?export=download&id=1u15MthpDa416OWIwqHRFs_9hV0_pwhw_",
      "https://drive.google.com/uc?export=download&id=1x_ZWasfx_eUaLRkr499cHuSjqACvDocx",
      "https://drive.google.com/uc?export=download&id=1KtMib8-OIw0IJjeUbb9QqNhYVD6-oZCB",
      "https://drive.google.com/uc?export=download&id=1EJf3YmSL8PrU5nZLsvAtMRp27r6bFOV6",
      "https://drive.google.com/uc?export=download&id=14qlHoK2vUNkZBB0nnykckxcb0BuRX3mh",
      "https://drive.google.com/uc?export=download&id=1ws14Tu1Sj3tLYee8kXbwxmKAeKU3QZmO",
      "https://drive.google.com/uc?export=download&id=18_k-qtS34k8jNu-1B3eVJ6ldqdjRfsI3",
      "https://drive.google.com/uc?export=download&id=1UgM60hasV4A_1zI3sDjwxqCTn-btKuot",
      "https://drive.google.com/uc?export=download&id=12XGYOyE1uJ1e8HA2SmAcLACQ4YQk4waD",
      "https://drive.google.com/uc?export=download&id=1U5lu6VQoLkXOLXrikNSC5_98sgs_Cd6I",
      "https://drive.google.com/uc?export=download&id=1GFpOc6eLI9W1LSj0MFed-21OegKD9PXh",
      "https://drive.google.com/uc?export=download&id=195u9TMOHKynbXZ8RcKvrXvYrR01NwUr2",
      "https://drive.google.com/uc?export=download&id=1ukRcQnQ_SVlBHT1in41T9FAhmZrwvN8q",
      "https://drive.google.com/uc?export=download&id=1vi7XAIezlSeEzDWURv_jv3KE7xwgaE5s",
      "https://drive.google.com/uc?export=download&id=18Q-nUprCUIGZR4cfn7zJRoAhGiQ3xGK7",
      "https://drive.google.com/uc?export=download&id=1qbXASaDoBozIBVtwZuFc-LlW34FJxkA9",
      "https://drive.google.com/uc?export=download&id=1PuuNjquEsvJIR1lpmgC34DrpcaAMBgG9",
      "https://drive.google.com/uc?export=download&id=1VN4cwxKOIsChdmHVpXIuCaErbLmgKVFG",
      "https://drive.google.com/uc?export=download&id=1wlFJfxsYGCLpG59WTAEGqkovCHdn8lDq",
      "https://drive.google.com/uc?export=download&id=1czqGatOWopuWAeS_SfBawScskZGHRInv",
      "https://drive.google.com/uc?export=download&id=18q-2dwiQ-i7jglxVbXsQnuS2x6xXcoes",
      "https://drive.google.com/uc?export=download&id=1KkYrP0rjdiPL0Ot8LCemYw53_ga33crb",
      "https://drive.google.com/uc?export=download&id=1FWk2ZwNOv4pQTAaNIwOqxY_f0Y29Q50Z",
      "https://drive.google.com/uc?export=download&id=19OOFBUK8omaw_3njwpfhU1_Zg4H410SR",
      "https://drive.google.com/uc?export=download&id=1O6vOuS1k7QJ0QhZi8eaffVASo5UXjBPk",
      "https://drive.google.com/uc?export=download&id=1JZEg0xlylxc1lcjJm9N_B2X5N6cpsk7H",
      "https://drive.google.com/uc?export=download&id=10XTsd6PRJ4gN8BKbYrtUPZc-Czbgbu9y",
      "https://drive.google.com/uc?export=download&id=1MiDERK5RLnN13qFtwiaL90_FFJHgV8px",
      "https://drive.google.com/uc?export=download&id=1GysalzafK9kpc6V3kBnMXPXinSWeOuJ1",
      "https://drive.google.com/uc?export=download&id=1B1aQ28nmBYpD7lZXABxuaelCv3SxOHaR",
      "https://drive.google.com/uc?export=download&id=1n6qa-IIelvd09LVr0osb2-x6aXWdsZd1",
      "https://drive.google.com/uc?export=download&id=15A57u8PmXM8dqGo1WdgsxN4EMvfx0P_x",
      "https://drive.google.com/uc?export=download&id=16WVjQvLbW0ksUyR5-wDGECKnCkWlMi3g",
      "https://drive.google.com/uc?export=download&id=1xSqfzkH_6ROB49vrgRAJl3jPJn9Z9eBu",
      "https://drive.google.com/uc?export=download&id=10r1gs6Yt8sXSTVMfPJFMzSMbtPH4Sx2a",
      "https://drive.google.com/uc?export=download&id=1mOebHb9gpWXQpyjyugXeGJp_k4aoVEQs",
      "https://drive.google.com/uc?export=download&id=1Qq76aDAiom-MEjcf2LTn8Et18dDf6Cnz",
      "https://drive.google.com/uc?export=download&id=1B6MZCFB0L0EEl1veDfPLnDaBfkDPWHoA",
      "https://drive.google.com/uc?export=download&id=1iv-V9-NNvCNFP5n7dEzIrsAbW3Cya89_",
      "https://drive.google.com/uc?export=download&id=18eWi4Po41OfiKUFxhTG3HEYRN5Nr4fM-",
      "https://drive.google.com/uc?export=download&id=1boUM52evQ5X8QMzwvLV82W3QWAFI_T7q",
      "https://drive.google.com/uc?export=download&id=1IQ20CzpbPV0X4JYWABYWdRKyRWEXCuOn",
      "https://drive.google.com/uc?export=download&id=1rKZiYhvjNygN9QkahXLMdbGX5eTewKnG",
      "https://drive.google.com/uc?export=download&id=1YSI7QY7De4BmhtuufUDGuOGr_bc0N5Mm",
      "https://drive.google.com/uc?export=download&id=1FAu3DTq6fBxrMkxXA-adYo5OWk2tAL-g",
      "https://drive.google.com/uc?export=download&id=1d0Kh4q_bC8qJUi00xT7-i8xzgADhCDp-",
      "https://drive.google.com/uc?export=download&id=1FzxN4GmnNieuwhosJM1tSRCANUKeihgi",
      "https://drive.google.com/uc?export=download&id=1_mIV0-s07p9kTDZqBAe7k7sawLsf75SA",
      "https://drive.google.com/uc?export=download&id=1FdULOvehKsgXyGRd2C_Txm4YfA9X1qSI",
      "https://drive.google.com/uc?export=download&id=1N7dYrsFAE3TgriC15PzYWV2x4TQZ33iI",
      "https://drive.google.com/uc?export=download&id=1wXYzlZpGKRY5w1vhmVtr-nbxC4wlM3TZ",
      "https://drive.google.com/uc?export=download&id=1NA01Lui8dnPP3hLJ6y78tCu18lZO2kFh",
      "https://drive.google.com/uc?export=download&id=16EDeGQ2Im5UhryNGCifQVGRmd7A82Iej",
      "https://drive.google.com/uc?export=download&id=1sMWk3seQy6C9FTKG-YhTLwOR9oIpfh2M",
      "https://drive.google.com/uc?export=download&id=1VTnxLzQ6_xQbVX01HMZLFVaNLF473Ph7",
      "https://drive.google.com/uc?export=download&id=1z6cSbHugsxf4iXKmlzHa_Qb0VAeFKrAj",
      "https://drive.google.com/uc?export=download&id=1QLPRFu6OERzm2H1xrH4s-J80jMSA5hZA",
      "https://drive.google.com/uc?export=download&id=1TsV_ONp2robS8M24BKw0qjSKKFnap1Fx",
      "https://drive.google.com/uc?export=download&id=1Jo-71oLJoo-_LQ2l4QFkK7YkiQFOkr4d",
      "https://drive.google.com/uc?export=download&id=1pbCviS2wJzZQ3AM-0iONICD8gcDGY694",
      "https://drive.google.com/uc?export=download&id=1CqqznsUC6JqFprtl6FKJ4ZhKjZW5mMeE",
      "https://drive.google.com/uc?export=download&id=1ZoKhqcQ1OgviH6VTjJIxjIUbCiXfZ4Sg",
      "https://drive.google.com/uc?export=download&id=1_7RSViFcjbVCxFxrEkiPX0AZYGEABlqw",
      "https://drive.google.com/uc?export=download&id=1fEbwq9_lvHjvOjcUL__2r0jE2rE8-9oA",
      "https://drive.google.com/uc?export=download&id=1Lymb65-T8NJ1tJggyZk5kwjvEbC3c8wf",
      "https://drive.google.com/uc?export=download&id=1w5EBHMGnQWVn_3RtIfHZy_cmCxjzo6lF",
      "https://drive.google.com/uc?export=download&id=1ufyvMTTfim-hk0AiKx9vMl9GaYQ-ciGZ",
      "https://drive.google.com/uc?export=download&id=1yT1ecqbATHxARVXTa5KIYTusxbQXxFj9",
      "https://drive.google.com/uc?export=download&id=1eDXgSzuhVHpj7FsPBkvkFAZyCECl-ISU",
      "https://drive.google.com/uc?export=download&id=1kwHXVMZOFbROh-1jrqVbv7jgKlk1awTw",
      "https://drive.google.com/uc?export=download&id=1BrWruzApiOebZaMakYl7Xpi1wTzJ-X-t",
      "https://drive.google.com/uc?export=download&id=1AOvplGd6xfdrYa6dnR3WwZFiLgE2htER",
      "https://drive.google.com/uc?export=download&id=1hry05OUtPSb-qqH-5uYG4UZ3OKF6jxp9",
      "https://drive.google.com/uc?export=download&id=1nFjV91vMCeN6uTEFwd_qjzMDDaI0K2pG",
      "https://drive.google.com/uc?export=download&id=1r98SYUlC42YrWd6LEEhYvUASP0DXLFTy",
      "https://drive.google.com/uc?export=download&id=1WawKRI1zJnqHYLJsmL4hQABBoLYEgNK-",
      "https://drive.google.com/uc?export=download&id=1pMy2cLK7nn1ic_YEi3zs7RZYoOf1sy8u",
      "https://drive.google.com/uc?export=download&id=1lHLBTW2qJSNGz48319WJ0SJjQLfVofTE",
      "https://drive.google.com/uc?export=download&id=1zQqYXyyqXMAnyQwiTA3gDTUAdai7DebZ",
      "https://drive.google.com/uc?export=download&id=14rX7XGP5iEax5iC0CdGYwtnOvVI841Pu",
      "https://drive.google.com/uc?export=download&id=1vi3ldazD17AXEb2WJs8qkQOYvqE32CWz",
      "https://drive.google.com/uc?export=download&id=1XlkIU0l9wFa7G-RDvdhFlFOfe56P1HFk",
      "https://drive.google.com/uc?export=download&id=1xGnPSSlRRmiSRaN6s-9b2dY-ULs_oP7Y",
      "https://drive.google.com/uc?export=download&id=110zR2a-1E8YANkF8n8Y95-aB2LqKsiNo",
      "https://drive.google.com/uc?export=download&id=1hVdfKm_3xVXVVJ-x4wHcbZoCB2cKcggK",
      "https://drive.google.com/uc?export=download&id=10COYbD724sqBs4_iuGWMdrjb3fEtZiH_",
      "https://drive.google.com/uc?export=download&id=1T_7y-mPvtueqWPiqJjCCBHBRpO6iafXe",
      "https://drive.google.com/uc?export=download&id=1eQS0KBytK8deZmn85DLkbH-hy6W_43JY",
      "https://drive.google.com/uc?export=download&id=1gtaJoydhw-n8X7YFZnAwFm1nGXSyTs5R",
      "https://drive.google.com/uc?export=download&id=1-McdSro06fqNzyfw694RmdVErCBH0dNt",
      "https://drive.google.com/uc?export=download&id=1g0TlY2mjdRcc8ptQrQFbsY0KAmKT3K8Z",
      "https://drive.google.com/uc?export=download&id=1IilHf4vGJBo0r6zIQ1I6Bv5P_gKTA0Rw",
      "https://drive.google.com/uc?export=download&id=1BnDY-keTUukhIujIcwp4bzWhZXc2ETgg",
      "https://drive.google.com/uc?export=download&id=1U9Hkx_uwbl4Cs-3yJlkf70GKKoB75gsP",
      "https://drive.google.com/uc?export=download&id=1rImQ7Db0dRGncIdwsBkiBV63aaco_goX",
      "https://drive.google.com/uc?export=download&id=120PdHGK8ba6fYdTQwnuQRsMKRa0xiIhq",
      "https://drive.google.com/uc?export=download&id=1BZZJHQmRCv4WzI2c_IuS30GEob9-RIs1",
      "https://drive.google.com/uc?export=download&id=1fPjuQEwS_thlZGq-9_IZuJwLZ4THDIZG",
      "https://drive.google.com/uc?export=download&id=1RWNu5-90Yr3YLwU6DUozloVJLO-qToyp",
      "https://drive.google.com/uc?export=download&id=17cRF8wJdfT1P4tOlk372FsjFxtJoYbOy",
      "https://drive.google.com/uc?export=download&id=1tKQ8Ux8ZtyKntrd2artoW4W0s4ObTnOU",
      "https://drive.google.com/uc?export=download&id=1LjDoR8qPiSdHcZsNtJXECtZ1oXNrP9Ox",
      "https://drive.google.com/uc?export=download&id=1wEkULorVp9umcQZuIaCKs8ssiz0-1naD",
      "https://drive.google.com/uc?export=download&id=1Puhfj5mLbhlUY7bZJYhgr6kR6Ol9-EaW",
      "https://drive.google.com/uc?export=download&id=1m9N3u_eITjExM-KqYCsAtiSPxufVkg2m",
      "https://drive.google.com/uc?export=download&id=1AzIljsF2z15oGPEUYokNFV7dtddo3FQm",
      "https://drive.google.com/uc?export=download&id=18dvOhBdaznNxiiMS43vUPZ1ZEOzQT-PK",
      "https://drive.google.com/uc?export=download&id=1MXMWSSH-qp74YhQNDcQx7YNzAEBPl4o-",
      "https://drive.google.com/uc?export=download&id=1s2Us9gSgKnIrFv5P4TLDQfsiZ6aSG3Yk",
      "https://drive.google.com/uc?export=download&id=1HJz5c06ZSPvnBoO5RJQ8m0GIVF9DbWTB",
      "https://drive.google.com/uc?export=download&id=1QclTMz3iaXrtydSncF77afPm15QaTJgE",
      "https://drive.google.com/uc?export=download&id=1MK1PWdo3By2q2VHwSwoQRh3PLXNkgCC6",
      "https://drive.google.com/uc?export=download&id=1wQVxPSCD818hMJltIUo8fhE_jxcgCrrX",
      "https://drive.google.com/uc?export=download&id=1j5110wVjUeg6iiixzvkE1xEkP7cVG5IX",
      "https://drive.google.com/uc?export=download&id=1uKteggt-JrBm6F7cZaI0QNK6lChslmpE",
      "https://drive.google.com/uc?export=download&id=1Fk_wZUqqhZ2uW31PrSvnwG6Oqvc_PU_W",
      "https://drive.google.com/uc?export=download&id=1juAQf9swVEbRIYtp4rn-dM6nvCTmy1qX",
      "https://drive.google.com/uc?export=download&id=1KzLMQ2zUEBxwiQoSh_HOgdWlkbsICY6M",
      "https://drive.google.com/uc?export=download&id=142UBI9cVFWPJBSOmCkexGl2um_QqMd2R",
      "https://drive.google.com/uc?export=download&id=1zP3jO97ein7glHjjcIN0xI7JIQooTUGd",
      "https://drive.google.com/uc?export=download&id=1cZVMycqVfWQjcOSeolnjgJwVgfLwGmh8",
      "https://drive.google.com/uc?export=download&id=1tmVw_z46Gwj_VUVk03ZBOsYIktnDqSNf",
      "https://drive.google.com/uc?export=download&id=168sT-auK68cv7zIuofR33T_rKQRvkk19",
      "https://drive.google.com/uc?export=download&id=1BKIzknCxWx1SlQeqlyZDHIWGWlGExt9W",
      "https://drive.google.com/uc?export=download&id=1foCzi5hKjTFvJgVv54nokUjC52u0bS8O",
      "https://drive.google.com/uc?export=download&id=1r0Y2CXvClT7zeRw7uDeYMFThuqFdDQps",
      "https://drive.google.com/uc?export=download&id=1mChi7luMGpaQ7SXVsKVOXukj3w-TwHaN",
      "https://drive.google.com/uc?export=download&id=161_tWi45-grQx7_DjZ7dwlHxbTVz32uY",
      "https://drive.google.com/uc?export=download&id=1ictFUDHhqYFnw98bv0s0wDsVchtEJWlS",
      "https://drive.google.com/uc?export=download&id=123jTZMsGkKFFnAeE2yuri-49ks8_Qb-i",
      "https://drive.google.com/uc?export=download&id=1DO_X5V1xLHS787JWcF0yE6NTftzaDzpR",
      "https://drive.google.com/uc?export=download&id=1bU6fim6XP-jmMsPA9EPaTxNSiDVaqGot",
      "https://drive.google.com/uc?export=download&id=1GfKiWg8sqfrqPnJIObyvoxtgg6YwjMUl",
      "https://drive.google.com/uc?export=download&id=1zLQFjtXyAbTphVRjQmRkVWdvwEtDBycL",
      "https://drive.google.com/uc?export=download&id=1ur8Q1GgJ7NiB6z0oT-jehm3O2qCUMD2B",
      "https://drive.google.com/uc?export=download&id=1PKq-bTE3X16KDDzaZfGX-0Pa3Aa8Z_-Z",
      "https://drive.google.com/uc?export=download&id=19uxd6EzcPDoI2q5Yq-e7XQvCLqU11NHk",
      "https://drive.google.com/uc?export=download&id=1GUvwyT1J9gPd0ifW1ZRsQfwlL5EjHqyb",
      "https://drive.google.com/uc?export=download&id=1_5PU7_82oYD09cFqAUDM_3AU1dPKC4Hj",
      "https://drive.google.com/uc?export=download&id=19l0zbsg3yLk9Vuh6nN_SGzyZFzkAr-9f",
      "https://drive.google.com/uc?export=download&id=1THs5plPDoNvYaOMGR47WG_1kGOCIXaI1",
      "https://drive.google.com/uc?export=download&id=1Ux8aL5ewJcDJhtzZ4weFJewo7dM-jtoX",
      "https://drive.google.com/uc?export=download&id=15OdaPKgqAbGO2HSwg7LeXqpZ6JenNSZr",
      "https://drive.google.com/uc?export=download&id=1oMbE05NlCBy3d3FqE3JtRj-12C1ZnsPM",
      "https://drive.google.com/uc?export=download&id=1NmrQYYxr9PcXIFiOgzhTxK1F7QB2KEMC",
      "https://drive.google.com/uc?export=download&id=18Y0Cb2w7bBuOT8NOLoCONLRP2i2bHLkA",
      "https://drive.google.com/uc?export=download&id=1uLxYQ9ZukqvtHpmjSoxwM4q8dNOXuOfg",
      "https://drive.google.com/uc?export=download&id=1xDO7ib9ozbr-CRWSg2sW4EtjG1xHIN5m",
      "https://drive.google.com/uc?export=download&id=10LoZLQpEGHnKvwd13EezViiVPXOg6JIp",
      "https://drive.google.com/uc?export=download&id=1qOacJ45oHznkOWWn00m5M_Ysi8A8MKOy",
      "https://drive.google.com/uc?export=download&id=1Fk_wZUqqhZ2uW31PrSvnwG6Oqvc_PU_W",
      "https://drive.google.com/uc?export=download&id=1GUvwyT1J9gPd0ifW1ZRsQfwlL5EjHqyb",
      "https://drive.google.com/uc?export=download&id=1GfKiWg8sqfrqPnJIObyvoxtgg6YwjMUl",
      "https://drive.google.com/uc?export=download&id=19uxd6EzcPDoI2q5Yq-e7XQvCLqU11NHk",
      "https://drive.google.com/uc?export=download&id=142UBI9cVFWPJBSOmCkexGl2um_QqMd2R",
      "https://drive.google.com/uc?export=download&id=1_5PU7_82oYD09cFqAUDM_3AU1dPKC4Hj",
      "https://drive.google.com/uc?export=download&id=1xDO7ib9ozbr-CRWSg2sW4EtjG1xHIN5m",
      "https://drive.google.com/uc?export=download&id=1DO_X5V1xLHS787JWcF0yE6NTftzaDzpR",
      "https://drive.google.com/uc?export=download&id=1dtZD6k_4_5ggR2X6OgYiQCd1DnnWoqmd",
      "https://drive.google.com/uc?export=download&id=123jTZMsGkKFFnAeE2yuri-49ks8_Qb-i",
      "https://drive.google.com/uc?export=download&id=1GApGr9uUA2Yr2CuAUnVE-niH3CJwDZPW",
      "https://drive.google.com/uc?export=download&id=1Ux8aL5ewJcDJhtzZ4weFJewo7dM-jtoX",
      "https://drive.google.com/uc?export=download&id=15OdaPKgqAbGO2HSwg7LeXqpZ6JenNSZr",
      "https://drive.google.com/uc?export=download&id=19l0zbsg3yLk9Vuh6nN_SGzyZFzkAr-9f",
      "https://drive.google.com/uc?export=download&id=1bU6fim6XP-jmMsPA9EPaTxNSiDVaqGot",
      "https://drive.google.com/uc?export=download&id=1dI0DVkVWTamZNuDwgrhzyzjAXVVo07V2",
      "https://drive.google.com/uc?export=download&id=18Y0Cb2w7bBuOT8NOLoCONLRP2i2bHLkA",
      "https://drive.google.com/uc?export=download&id=18Y0Cb2w7bBuOT8NOLoCONLRP2i2bHLkA",
      "https://drive.google.com/uc?export=download&id=1uKteggt-JrBm6F7cZaI0QNK6lChslmpE",
      "https://drive.google.com/uc?export=download&id=1ictFUDHhqYFnw98bv0s0wDsVchtEJWlS",
      "https://drive.google.com/uc?export=download&id=1ur8Q1GgJ7NiB6z0oT-jehm3O2qCUMD2B",
      "https://drive.google.com/uc?export=download&id=1HJz5c06ZSPvnBoO5RJQ8m0GIVF9DbWTB",
      "https://drive.google.com/uc?export=download&id=1wQVxPSCD818hMJltIUo8fhE_jxcgCrrX",
      "https://drive.google.com/uc?export=download&id=1r0Y2CXvClT7zeRw7uDeYMFThuqFdDQps",
      "https://drive.google.com/uc?export=download&id=1foCzi5hKjTFvJgVv54nokUjC52u0bS8O",
      "https://drive.google.com/uc?export=download&id=1PKq-bTE3X16KDDzaZfGX-0Pa3Aa8Z_-Z",
      "https://drive.google.com/uc?export=download&id=1mChi7luMGpaQ7SXVsKVOXukj3w-TwHaN",
      "https://drive.google.com/uc?export=download&id=1AzIljsF2z15oGPEUYokNFV7dtddo3FQm",
      "https://drive.google.com/uc?export=download&id=1zLQFjtXyAbTphVRjQmRkVWdvwEtDBycL",
      "https://drive.google.com/uc?export=download&id=1tKQ8Ux8ZtyKntrd2artoW4W0s4ObTnOU",
      "https://drive.google.com/uc?export=download&id=1wEkULorVp9umcQZuIaCKs8ssiz0-1naD",
      "https://drive.google.com/uc?export=download&id=1cZVMycqVfWQjcOSeolnjgJwVgfLwGmh8",
      "https://drive.google.com/uc?export=download&id=1zQqYXyyqXMAnyQwiTA3gDTUAdai7DebZ",
      "https://drive.google.com/uc?export=download&id=1MK1PWdo3By2q2VHwSwoQRh3PLXNkgCC6",
      "https://drive.google.com/uc?export=download&id=14rX7XGP5iEax5iC0CdGYwtnOvVI841Pu",
      "https://drive.google.com/uc?export=download&id=1vi3ldazD17AXEb2WJs8qkQOYvqE32CWz",
      "https://drive.google.com/uc?export=download&id=1juAQf9swVEbRIYtp4rn-dM6nvCTmy1qX",
      "https://drive.google.com/uc?export=download&id=1BKIzknCxWx1SlQeqlyZDHIWGWlGExt9W",
      "https://drive.google.com/uc?export=download&id=1BZZJHQmRCv4WzI2c_IuS30GEob9-RIs1",
      "https://drive.google.com/uc?export=download&id=161_tWi45-grQx7_DjZ7dwlHxbTVz32uY",
      "https://drive.google.com/uc?export=download&id=1KzLMQ2zUEBxwiQoSh_HOgdWlkbsICY6M",
      "https://drive.google.com/uc?export=download&id=1RWNu5-90Yr3YLwU6DUozloVJLO-qToyp",
      "https://drive.google.com/uc?export=download&id=1fPjuQEwS_thlZGq-9_IZuJwLZ4THDIZG",
      "https://drive.google.com/uc?export=download&id=120PdHGK8ba6fYdTQwnuQRsMKRa0xiIhq",
      "https://drive.google.com/uc?export=download&id=168sT-auK68cv7zIuofR33T_rKQRvkk19",
      "https://drive.google.com/uc?export=download&id=110zR2a-1E8YANkF8n8Y95-aB2LqKsiNo",
      "https://drive.google.com/uc?export=download&id=1KtMib8-OIw0IJjeUbb9QqNhYVD6-oZCB",
      "https://drive.google.com/uc?export=download&id=1WawKRI1zJnqHYLJsmL4hQABBoLYEgNK-",
      "https://drive.google.com/uc?export=download&id=1LjDoR8qPiSdHcZsNtJXECtZ1oXNrP9Ox",
      "https://drive.google.com/uc?export=download&id=1gtaJoydhw-n8X7YFZnAwFm1nGXSyTs5R",
      "https://drive.google.com/uc?export=download&id=1zP3jO97ein7glHjjcIN0xI7JIQooTUGd",
      "https://drive.google.com/uc?export=download&id=1QclTMz3iaXrtydSncF77afPm15QaTJgE",
      "https://drive.google.com/uc?export=download&id=18dvOhBdaznNxiiMS43vUPZ1ZEOzQT-PK",
      "https://drive.google.com/uc?export=download&id=1MXMWSSH-qp74YhQNDcQx7YNzAEBPl4o-",
      "https://drive.google.com/uc?export=download&id=1Lymb65-T8NJ1tJggyZk5kwjvEbC3c8wf",
      "https://drive.google.com/uc?export=download&id=1tmVw_z46Gwj_VUVk03ZBOsYIktnDqSNf",
      "https://drive.google.com/uc?export=download&id=1eQS0KBytK8deZmn85DLkbH-hy6W_43JY",
      "https://drive.google.com/uc?export=download&id=1U9Hkx_uwbl4Cs-3yJlkf70GKKoB75gsP",
      "https://drive.google.com/uc?export=download&id=1Puhfj5mLbhlUY7bZJYhgr6kR6Ol9-EaW",
      "https://drive.google.com/uc?export=download&id=1xGnPSSlRRmiSRaN6s-9b2dY-ULs_oP7Y",
      "https://drive.google.com/uc?export=download&id=1pbCviS2wJzZQ3AM-0iONICD8gcDGY694",
      "https://drive.google.com/uc?export=download&id=1BnDY-keTUukhIujIcwp4bzWhZXc2ETgg",
      "https://drive.google.com/uc?export=download&id=1s2Us9gSgKnIrFv5P4TLDQfsiZ6aSG3Yk",
      "https://drive.google.com/uc?export=download&id=1hVdfKm_3xVXVVJ-x4wHcbZoCB2cKcggK",
      "https://drive.google.com/uc?export=download&id=1sMWk3seQy6C9FTKG-YhTLwOR9oIpfh2M",
      "https://drive.google.com/uc?export=download&id=1m9N3u_eITjExM-KqYCsAtiSPxufVkg2m",
      "https://drive.google.com/uc?export=download&id=16EDeGQ2Im5UhryNGCifQVGRmd7A82Iej",
      "https://drive.google.com/uc?export=download&id=1T_7y-mPvtueqWPiqJjCCBHBRpO6iafXe",
      "https://drive.google.com/uc?export=download&id=16EDeGQ2Im5UhryNGCifQVGRmd7A82Iej",
      "https://drive.google.com/uc?export=download&id=1rImQ7Db0dRGncIdwsBkiBV63aaco_goX",
      "https://drive.google.com/uc?export=download&id=1TsV_ONp2robS8M24BKw0qjSKKFnap1Fx",
      "https://drive.google.com/uc?export=download&id=1g0TlY2mjdRcc8ptQrQFbsY0KAmKT3K8Z",
      "https://drive.google.com/uc?export=download&id=10XTsd6PRJ4gN8BKbYrtUPZc-Czbgbu9y",
      "https://drive.google.com/uc?export=download&id=1lHLBTW2qJSNGz48319WJ0SJjQLfVofTE",
      "https://drive.google.com/uc?export=download&id=1IilHf4vGJBo0r6zIQ1I6Bv5P_gKTA0Rw",
      "https://drive.google.com/uc?export=download&id=1ufyvMTTfim-hk0AiKx9vMl9GaYQ-ciGZ",
      "https://drive.google.com/uc?export=download&id=1FAu3DTq6fBxrMkxXA-adYo5OWk2tAL-g",
      "https://drive.google.com/uc?export=download&id=1IilHf4vGJBo0r6zIQ1I6Bv5P_gKTA0Rw",
      "https://drive.google.com/uc?export=download&id=1FAu3DTq6fBxrMkxXA-adYo5OWk2tAL-g",
      "https://drive.google.com/uc?export=download&id=1NA01Lui8dnPP3hLJ6y78tCu18lZO2kFh",
      "https://drive.google.com/uc?export=download&id=195u9TMOHKynbXZ8RcKvrXvYrR01NwUr2",
      "https://drive.google.com/uc?export=download&id=17cRF8wJdfT1P4tOlk372FsjFxtJoYbOy",
      "https://drive.google.com/uc?export=download&id=1Jo-71oLJoo-_LQ2l4QFkK7YkiQFOkr4d",
      "https://drive.google.com/uc?export=download&id=1-McdSro06fqNzyfw694RmdVErCBH0dNt",
      "https://drive.google.com/uc?export=download&id=1rKZiYhvjNygN9QkahXLMdbGX5eTewKnG",
      "https://drive.google.com/uc?export=download&id=10COYbD724sqBs4_iuGWMdrjb3fEtZiH_",
      "https://drive.google.com/uc?export=download&id=12XGYOyE1uJ1e8HA2SmAcLACQ4YQk4waD",
      "https://drive.google.com/uc?export=download&id=1BrWruzApiOebZaMakYl7Xpi1wTzJ-X-t",
      "https://drive.google.com/uc?export=download&id=1UgM60hasV4A_1zI3sDjwxqCTn-btKuot",
      "https://drive.google.com/uc?export=download&id=1kwHXVMZOFbROh-1jrqVbv7jgKlk1awTw",
      "https://drive.google.com/uc?export=download&id=1XlkIU0l9wFa7G-RDvdhFlFOfe56P1HFk",
      "https://drive.google.com/uc?export=download&id=1YSI7QY7De4BmhtuufUDGuOGr_bc0N5Mm",
      "https://drive.google.com/uc?export=download&id=1pMy2cLK7nn1ic_YEi3zs7RZYoOf1sy8u",
      "https://drive.google.com/uc?export=download&id=1yT1ecqbATHxARVXTa5KIYTusxbQXxFj9",
      "https://drive.google.com/uc?export=download&id=1FdULOvehKsgXyGRd2C_Txm4YfA9X1qSI",
      "https://drive.google.com/uc?export=download&id=1nFjV91vMCeN6uTEFwd_qjzMDDaI0K2pG",
      "https://drive.google.com/uc?export=download&id=1_7RSViFcjbVCxFxrEkiPX0AZYGEABlqw",
      "https://drive.google.com/uc?export=download&id=1w5EBHMGnQWVn_3RtIfHZy_cmCxjzo6lF",
      "https://drive.google.com/uc?export=download&id=1fEbwq9_lvHjvOjcUL__2r0jE2rE8-9oA",
      "https://drive.google.com/uc?export=download&id=1AOvplGd6xfdrYa6dnR3WwZFiLgE2htER",
      "https://drive.google.com/uc?export=download&id=1cSXzrFZfPlqZLCIuVfdfwFegWWuL1QOx",
      "https://drive.google.com/uc?export=download&id=1O6vOuS1k7QJ0QhZi8eaffVASo5UXjBPk",
      "https://drive.google.com/uc?export=download&id=1GysalzafK9kpc6V3kBnMXPXinSWeOuJ1",
      "https://drive.google.com/uc?export=download&id=1VTnxLzQ6_xQbVX01HMZLFVaNLF473Ph7",
      "https://drive.google.com/uc?export=download&id=1FzxN4GmnNieuwhosJM1tSRCANUKeihgi",
      "https://drive.google.com/uc?export=download&id=1lrM58h_FsZhZwEFu-B0GPv3EfqsWGQM5",
      "https://drive.google.com/uc?export=download&id=1FWk2ZwNOv4pQTAaNIwOqxY_f0Y29Q50Z",
      "https://drive.google.com/uc?export=download&id=1hry05OUtPSb-qqH-5uYG4UZ3OKF6jxp9",
      "https://drive.google.com/uc?export=download&id=1ZoKhqcQ1OgviH6VTjJIxjIUbCiXfZ4Sg",
      "https://drive.google.com/uc?export=download&id=1d0Kh4q_bC8qJUi00xT7-i8xzgADhCDp-",
      "https://drive.google.com/uc?export=download&id=1r98SYUlC42YrWd6LEEhYvUASP0DXLFTy",
      "https://drive.google.com/uc?export=download&id=1wXYzlZpGKRY5w1vhmVtr-nbxC4wlM3TZ",
      "https://drive.google.com/uc?export=download&id=18Q-nUprCUIGZR4cfn7zJRoAhGiQ3xGK7",
      "https://drive.google.com/uc?export=download&id=1iv-V9-NNvCNFP5n7dEzIrsAbW3Cya89_",
      "https://drive.google.com/uc?export=download&id=1eDXgSzuhVHpj7FsPBkvkFAZyCECl-ISU",
      "https://drive.google.com/uc?export=download&id=19OOFBUK8omaw_3njwpfhU1_Zg4H410SR",
      "https://drive.google.com/uc?export=download&id=1_mIV0-s07p9kTDZqBAe7k7sawLsf75SA",
      "https://drive.google.com/uc?export=download&id=18eWi4Po41OfiKUFxhTG3HEYRN5Nr4fM-",
      "https://drive.google.com/uc?export=download&id=1QLPRFu6OERzm2H1xrH4s-J80jMSA5hZA",
      "https://drive.google.com/uc?export=download&id=1Qq76aDAiom-MEjcf2LTn8Et18dDf6Cnz",
      "https://drive.google.com/uc?export=download&id=1B6MZCFB0L0EEl1veDfPLnDaBfkDPWHoA",
      "https://drive.google.com/uc?export=download&id=1CqqznsUC6JqFprtl6FKJ4ZhKjZW5mMeE",
      "https://drive.google.com/uc?export=download&id=1ukRcQnQ_SVlBHT1in41T9FAhmZrwvN8q",
      "https://drive.google.com/uc?export=download&id=1qh4uSwJ5aobXXfjqNBGcQBsvB3D9MFWt",
      "https://drive.google.com/uc?export=download&id=1qbXASaDoBozIBVtwZuFc-LlW34FJxkA9",
      "https://drive.google.com/uc?export=download&id=1N7dYrsFAE3TgriC15PzYWV2x4TQZ33iI",
      "https://drive.google.com/uc?export=download&id=1qbXASaDoBozIBVtwZuFc-LlW34FJxkA9",
      "https://drive.google.com/uc?export=download&id=1N7dYrsFAE3TgriC15PzYWV2x4TQZ33iI",
      "https://drive.google.com/uc?export=download&id=1EJf3YmSL8PrU5nZLsvAtMRp27r6bFOV6",
      "https://drive.google.com/uc?export=download&id=1JZEg0xlylxc1lcjJm9N_B2X5N6cpsk7H",
      "https://drive.google.com/uc?export=download&id=1z6cSbHugsxf4iXKmlzHa_Qb0VAeFKrAj",
      "https://drive.google.com/uc?export=download&id=1B1aQ28nmBYpD7lZXABxuaelCv3SxOHaR",
      "https://drive.google.com/uc?export=download&id=1-Vg02rktcSJARTjLXUhZsRW5-eFY32Lq",
      "https://drive.google.com/uc?export=download&id=14qlHoK2vUNkZBB0nnykckxcb0BuRX3mh",
//      "", Add more video links here
    ];

    const availableVideos = link.filter(video => !this.sentVideos.includes(video));

    if (availableVideos.length === 0) {
      this.sentVideos = [];
    }

    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const randomVideo = availableVideos[randomIndex];

    this.sentVideos.push(randomVideo);

    if (senderID !== null) {
      message.reply({
        body: '𝗲𝗻𝗷𝗼𝘆 𝘁𝗵𝗶𝘀 𝘃𝗶𝗱𝗲𝗼🤡',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 10000);
    }
  },
};
