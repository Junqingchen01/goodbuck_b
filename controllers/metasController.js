const { Meta_de_poupança} = require('../models/meta');
const { User } = require('../models/user');

// 获取用户所有目标
exports.getAllMetas = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findOne({ where: { UserID: id } });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const metas = await Meta_de_poupança.findAll({
            where: { UserID: id },
            order: [
                ['Priority', 'ASC'],
                ['EndDate', 'ASC'],
            ],
        });

        return res.status(200).json({message:"metas:",metas});
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.getMetaByID = async (req, res) => {
    const { id, Metaid } = req.params;
    try {
        const meta = await Meta_de_poupança.findOne({
            where: { MetaID: Metaid, UserID: id }
        });

        if (!meta) {
            return res.status(404).json({ message: 'Meta not found' });
        }

        return res.status(200).json(meta);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// 创建目标
exports.createMeta = async (req, res) => {
    const { id } = req.params;
    const { Name, StartDate, EndDate, PlannedContribution, CurrentContribution, Description, Priority } = req.body;

    try {
        const user = await User.findOne({ where: { UserID: id } });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const meta = await Meta_de_poupança.create({
            UserID: id,
            Name,
            StartDate,
            EndDate,
            PlannedContribution,
            CurrentContribution,
            Description,
            Priority
        });

        return res.status(201).json(meta);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.updateMeta = async (req, res) => {
    const { id, Metaid } = req.params;
    const { Name, StartDate, EndDate, PlannedContribution, CurrentContribution, Description, Priority } = req.body;

    try {
        const user = await User.findOne({ where: { UserID: id } });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const meta = await Meta_de_poupança.findOne({
            where: { MetaID: Metaid, UserID: id }
        });

        if (!meta) {
            return res.status(404).json({ message: 'Meta not found' });
        }

        await meta.update({
            Name,
            StartDate,
            EndDate,
            PlannedContribution,
            CurrentContribution,
            Description,
            Priority
        });

        return res.status(200).json(meta);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// 删除目标
exports.deleteMeta = async (req, res) => {
    const { id, Metaid } = req.params;
    try {
        const user = await User.findOne({ where: { UserID: id } });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const meta = await Meta_de_poupança.findOne({
            where: { MetaID: Metaid, UserID: id }
        });

        if (!meta) {
            return res.status(404).json({ message: 'Meta not found' });
        }
        await meta.destroy();
        return res.status(200).send({ message: 'Meta deleted successfully'});
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
